(function () {
  "use strict";
  var D = window.FAZAYAH;
  var state = { lang: "en", billing: "monthly", level: "all", open: {}, notice: null };
  var $ = function (id) { return document.getElementById(id); };

  function t(key) {
    var v = D.ui[state.lang][key];
    return v === undefined ? D.ui.en[key] : v;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function langInfo(code) {
    return D.langs.filter(function (l) { return l.code === code; })[0];
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem("fazayah-lang"); } catch (e) {}
    if (saved && langInfo(saved)) return saved;
    var prefs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (langInfo(code)) return code;
    }
    return "en";
  }

  function renderStatic() {
    var info = langInfo(state.lang);
    document.documentElement.lang = info.code;
    document.documentElement.dir = info.dir;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    $("lang-select").value = state.lang;
    $("lang-select").setAttribute("aria-label", t("lang_label"));
    document.querySelectorAll("#picker-list button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
    });

    var modules = 0, lessons = 0;
    D.courses.forEach(function (c) { modules += c.t.en.modules.length; lessons += c.lessons; });
    $("tally").innerHTML = [
      [D.courses.length, "n_courses"], [modules, "n_modules"], [lessons, "n_lessons"], [D.langs.length, "n_languages"]
    ].map(function (p) {
      return "<div><b>" + p[0] + "</b><span>" + esc(t(p[1])) + "</span></div>";
    }).join("");
  }

  function renderFilter() {
    $("level-filter").innerHTML =
      '<span class="eyebrow seg-label">' + esc(t("filter_label")) + "</span>" +
      ["all", "beginner", "intermediate", "advanced"].map(function (lv) {
        return '<button type="button" data-level="' + lv + '" aria-pressed="' + (state.level === lv) + '">' + esc(t(lv)) + "</button>";
      }).join("");
  }

  function renderCourses() {
    $("catalog").innerHTML = D.courses.filter(function (c) {
      return state.level === "all" || c.level === state.level;
    }).map(function (c) {
      var x = c.t[state.lang] || c.t.en;
      return '<details class="course" data-code="' + c.code + '"' + (state.open[c.code] ? " open" : "") + ">" +
        "<summary>" +
          '<span class="course-code" dir="ltr">' + c.code + "</span>" +
          '<span class="course-main"><span class="course-title">' + esc(x.title) + "</span>" +
          '<span class="course-summary">' + esc(x.summary) + "</span></span>" +
          '<span class="course-facts"><span class="level" data-level="' + c.level + '">' + esc(t(c.level)) + "</span>" +
          "<span>" + c.weeks + " " + esc(t("weeks")) + " · " + c.lessons + " " + esc(t("lessons")) + " · " + c.projects + " " + esc(t("projects")) + "</span></span>" +
          '<span class="chev" aria-hidden="true"></span>' +
        "</summary>" +
        '<div class="course-body">' +
          '<div><p class="label">' + esc(t("syllabus")) + '</p><ol class="modules">' +
            x.modules.map(function (m) {
              return "<li><div><strong>" + esc(m[0]) + "</strong><span>" + esc(m[1]) + "</span></div></li>";
            }).join("") + "</ol></div>" +
          '<div class="course-side">' +
            '<div><p class="label">' + esc(t("prereq")) + "</p><p>" + esc(x.prereq) + "</p></div>" +
            '<div><p class="label">' + esc(t("outcome")) + "</p><p>" + esc(x.outcome) + "</p></div>" +
            '<div><p class="label">' + esc(t("stack")) + '</p><ul class="tags" dir="ltr">' +
              c.stack.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>" +
          "</div>" +
        "</div></details>";
    }).join("");
  }

  function renderPlans() {
    var yearly = state.billing === "yearly";
    $("billing").innerHTML = ["monthly", "yearly"].map(function (b) {
      return '<button type="button" data-billing="' + b + '" aria-pressed="' + (state.billing === b) + '">' + esc(t(b)) + "</button>";
    }).join("");
    $("plans").innerHTML = D.plans.map(function (p) {
      var amount = yearly ? p.yearly : p.monthly;
      var label = esc(t("cta_" + p.id));
      var cta = p.checkout
        ? '<a class="btn' + (p.featured ? " btn-solid" : "") + '" href="' + esc(p.checkout) + '">' + label + "</a>"
        : '<button type="button" class="btn' + (p.featured ? " btn-solid" : "") + '" data-plan="' + p.id + '">' + label + "</button>";
      return '<article class="plan' + (p.featured ? " featured" : "") + '">' +
        "<h3>" + esc(t(p.id + "_name")) + "</h3>" +
        '<p class="plan-desc">' + esc(t(p.id + "_desc")) + "</p>" +
        '<p class="price"><b dir="ltr">$' + amount + "</b><span>" + esc(t(yearly ? "per_year" : "per_month")) + "</span></p>" +
        '<p class="price-note">' + (yearly && p.yearly ? esc(t("yearly_note")) : "") + "</p>" +
        "<ul>" + t(p.id + "_f").map(function (f) { return "<li><span>" + esc(f) + "</span></li>"; }).join("") + "</ul>" +
        cta + "</article>";
    }).join("");
    $("plan-notice").textContent = state.notice
      ? t("checkout_soon").replace("{plan}", t(state.notice + "_name")) : "";
  }

  function renderFaq() {
    $("faq").innerHTML = t("faq").map(function (qa) {
      return "<details><summary>" + esc(qa[0]) + "</summary><p>" + esc(qa[1]) + "</p></details>";
    }).join("");
  }

  function renderAll() { renderStatic(); renderFilter(); renderCourses(); renderPlans(); renderFaq(); }

  function setLang(code) {
    if (!langInfo(code)) return;
    state.lang = code;
    try { localStorage.setItem("fazayah-lang", code); } catch (e) {}
    renderAll();
  }

  function start() {
    $("lang-select").innerHTML = D.langs.map(function (l) {
      return '<option value="' + l.code + '">' + esc(l.name) + "</option>";
    }).join("");
    $("picker-list").innerHTML = D.langs.map(function (l) {
      return '<button type="button" data-lang="' + l.code + '" lang="' + l.code + '" dir="' + l.dir + '">' +
        '<span class="name">' + esc(l.name) + '</span><span class="phrase">' + esc(D.ui[l.code].phrase) + "</span></button>";
    }).join("");

    $("lang-select").addEventListener("change", function (e) { setLang(e.target.value); });
    $("picker-list").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lang]");
      if (b) setLang(b.dataset.lang);
    });
    $("level-filter").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-level]");
      if (b) { state.level = b.dataset.level; renderFilter(); renderCourses(); }
    });
    $("catalog").addEventListener("toggle", function (e) {
      if (e.target.dataset && e.target.dataset.code) state.open[e.target.dataset.code] = e.target.open;
    }, true);
    $("billing").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-billing]");
      if (b) { state.billing = b.dataset.billing; renderPlans(); }
    });
    $("plans").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-plan]");
      if (b) { state.notice = b.dataset.plan; renderPlans(); }
    });

    state.lang = initialLang();
    state.open[D.courses[0].code] = true;
    renderAll();
  }

  start();
})();
