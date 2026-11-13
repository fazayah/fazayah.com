/* Offline support. Pages and assets come from the network when there is one, so
   edits show up at once; the last copy fetched is served when there is not. */
var CACHE = "fazayah-v1";

self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  /* Live radio streams never end, so they must not be copied into the cache. */
  if (event.request.destination === "audio" || event.request.destination === "video") return;
  event.respondWith(
    fetch(event.request).then(function (response) {
      var copy = response.clone();
      caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
      return response;
    }).catch(function () {
      return caches.match(event.request, { ignoreSearch: event.request.mode === "navigate" });
    })
  );
});
