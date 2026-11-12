# fazayah.com

Static site: a course catalog in five languages (English, Arabic, Urdu, French, Spanish) with subscription prices. No build step; open `index.html` or serve the folder.

- `assets/data-ui.js`: languages, plan prices, checkout links and all interface text.
- `assets/data-courses.js`: the courses and their syllabi, in every language.
- `assets/app.js`, `assets/styles.css`: rendering and styles.

To open enrollment, put each plan's payment link in its `checkout` field in `assets/data-ui.js`.
