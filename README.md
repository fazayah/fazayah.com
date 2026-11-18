# fazayah.com

Static site: course catalogs for two schools (mechanical engineering and mineral engineering) in five languages (English, Arabic, Urdu, French, Spanish) with subscription prices. It can be installed as an app and opens offline. No build step; serve the folder.

- `assets/data-ui.js`: languages, schools, plan prices, checkout links and all interface text.
- `assets/data-mechanical.js`: the mechanical engineering courses and their English text. The other languages are in `assets/data-mechanical.<lang>.js`.
- `assets/data-courses.js`: the mineral engineering courses, in every language.
- `assets/app.js`, `assets/styles.css`: rendering and styles.
- `manifest.webmanifest`, `sw.js`, `assets/icon*`: the installable app.

The first school in `schools` in `assets/data-ui.js` is the one visitors see first; `?school=mineral` links straight to the other.

To open enrollment, put each plan's payment links in its `checkout` field in `assets/data-ui.js`: one link for monthly billing and one for yearly.

## Weather app

`weather/index.html` is Anwa Weather, a single-file app at `/weather`: live forecast for any city (data from Open-Meteo), an animated sky drawn from the current conditions, a briefing written from the forecast numbers, and subscription prices, in ten languages.

- Plan prices and payment links are in `PLANS` at the top of the script; each plan has a monthly and a yearly link, and while a link is empty the button says subscriptions are not open yet.
- Interface text is in `TEXT`, one list per language, in the order given by `KEYS`.
- When the forecast service cannot be reached the page shows a sample forecast with a notice.

## Nuclear engineering guide

`nuclear-engineering-guide.html` is a standalone page: a free advanced nuclear engineering reference guide, marked as a draft for study only. It does not use the course data files.
