# Road to HTB DE

**Live site:** https://thefinalflex.github.io/road-to-detection-engineering/

A public community study roadmap for HTB's announced Detection Engineering certification. Follow topics in order and choose relevant free courses, paid training, or books beneath each topic. The 12 proposed advanced HTB preparation modules sit alongside the foundations they use.

This is an independent guide, not an official HTB syllabus. The certification's final name, path, and exam requirements were not verified as of October 5, 2026. The official certification path takes precedence when published.

## Features

- Five learning phases and 29 topics, each with a practical readiness goal.
- Topic search, expandable resources, and contextual notes explaining each resource's relevance.
- Progress stored locally in each visitor's browser, with JSON export/import.
- No account, server, cookies, analytics, or shared progress database.
- Responsive layout, keyboard-accessible controls, and reduced-motion support.
- Downloadable Markdown checklist.

System monospace fonts keep the page lightweight. Three externally hosted BLAME! images provide the visual reference, credited to Tsutomu Nihei with their Pinterest sources linked on the page. The images are not included in the repository. The accompanying study captions are original roadmap notes. Training resources open on the providers' websites and may require their own accounts or subscriptions. Resource selections reflect the topic covered, not a provider endorsement.

Saved progress uses format v2 and accepts v1 or v2 JSON backups. Equivalent assembly and reversing topics migrate to the unified checklist. Completing an old supporting debugger course does not mark a whole HTB or kernel topic complete. The old local v1 data is left intact as a recovery copy.

## Run locally

Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. There is no build step or package installation.

## Publish with GitHub Pages

In repository **Settings → Pages**, select **Deploy from a branch**, then **main / (root)**. The `.nojekyll` file keeps the static assets unchanged. All asset paths are relative, so project Pages URLs work.

## Update the content

Edit `data.js` for topic content and resource links. Each topic has a `goal`; each resource has `label`, `url`, `type` (`free`, `paid`, or `book`), and a short `note` explaining its use. Keep step IDs stable because saved progress uses them. Use `legacyIds` only when old and new completion mean the same thing. Keep `roadmap.md` and the visible review date aligned with substantive content updates. Update release-status statements when HTB publishes authoritative information. Updates are manual; the site does not monitor HTB automatically.

The website does not contain copied lesson content, lab answers, or course solutions. Provider names identify the linked resources. This project is not affiliated with or endorsed by the training providers.
