# fazayah.com

Static site: course catalogs for two schools (mechanical engineering and mineral engineering) in five languages (English, Arabic, Urdu, French, Spanish) with subscription prices. It can be installed as an app and opens offline. No build step; serve the folder.

- `assets/data-ui.js`: languages, schools, plan prices, checkout links and all interface text.
- `assets/data-mechanical.js`: the mechanical engineering courses and their English text. The other languages are in `assets/data-mechanical.<lang>.js`.
- `assets/data-courses.js`: the mineral engineering courses, in every language.
- `assets/app.js`, `assets/styles.css`: rendering and styles.
- `manifest.webmanifest`, `sw.js`, `assets/icon*`: the installable app.

The first school in `schools` in `assets/data-ui.js` is the one visitors see first; `?school=mineral` links straight to the other.

To open enrollment, put each plan's payment link in its `checkout` field in `assets/data-ui.js`.
