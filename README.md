# Road to Detection Engineering

**Live site:** https://thefinalflex.github.io/road-to-detection-engineering/

A public community study roadmap for HTB's announced Detection Engineering certification. Includes the 12 proposed advanced HTB preparation modules, integrated OpenSecurityTraining2 courses, and supporting foundations.

This is an independent guide, not an official HTB syllabus. The certification's final name, path, and exam requirements were not verified as of October 5, 2026. The official certification path takes precedence when published.

## Features

- Five learning phases and 33 study steps.
- HTB core and OST2 filters, full-text course search, and expandable resource links.
- Progress stored locally in each visitor's browser, with JSON export/import.
- No account, server, cookies, analytics, or shared progress database.
- Responsive layout, keyboard-accessible controls, and reduced-motion support.
- Downloadable Markdown checklist.

Google Fonts supplies the page typefaces; system fonts remain available as a fallback. Training resources open on the providers' websites and may require their own accounts or subscriptions.

## Run locally

Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. There is no build step or package installation.

## Publish with GitHub Pages

In repository **Settings → Pages**, select **Deploy from a branch**, then **main / (root)**. The `.nojekyll` file keeps the static assets unchanged. All asset paths are relative, so project Pages URLs work.

## Update the content

Edit `data.js` for course content and resource links. Keep step IDs stable because saved progress uses them. Keep `roadmap.md` and the visible review date aligned with substantive content updates. Update release-status statements when HTB publishes authoritative information. Updates are manual; the site does not monitor HTB automatically.

The website does not contain copied lesson content, lab answers, or course solutions. Hack The Box and OpenSecurityTraining2 names identify the linked training providers. This project is not affiliated with or endorsed by either organization.
