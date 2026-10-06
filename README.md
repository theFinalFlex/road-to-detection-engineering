# Road to HTB DE

**Live site:** https://thefinalflex.github.io/road-to-detection-engineering/

A simple topic wiki for detection engineering, arranged in a suggested learning order. Open any of the 29 topics across six sections for notes, relevant free resources, paid courses, and books. The 12 proposed advanced HTB preparation modules sit alongside the foundations they use.

This is an independent guide, not an official HTB syllabus. The certification's final name, path, and exam requirements were not verified as of October 5, 2026. The official certification path takes precedence when published.

The page uses native expandable sections, system monospace fonts, and a minimal black-and-white layout. There are no accounts, analytics, or progress tracking. Windows and Linux entries are labeled, with separate kernel and Linux sections. Small monochrome symbols identify subjects and HTB modules. A Markdown version is available for sharing. Three externally hosted BLAME! images are credited to Tsutomu Nihei with their sources linked on the page; the images are not included in the repository. The displayed quotes are short lines visible in the linked manga images.

## Run locally

Open `index.html` directly, or serve this directory with any static web server:

```sh
python3 -m http.server 8000
```

There is no build step or package installation.

## Publish with GitHub Pages

In repository **Settings → Pages**, select **Deploy from a branch**, then **main / (root)**. The `.nojekyll` file keeps the static assets unchanged. All asset paths are relative, so project Pages URLs work.

## Update the content

Edit `data.js` for topic content and resource links. Each topic has a practical `goal`; each resource has `label`, `url`, `type` (`free`, `paid`, or `book`), and a short `note` explaining its use. The `platform`, `symbol`, and `htbModule` fields control the small topic markers. IDs identify topic anchors. Keep `roadmap.md` and the visible review date aligned with substantive content updates. Update release-status statements when HTB publishes authoritative information. Updates are manual; the site does not monitor HTB automatically.

Training resources open on the providers' websites and may require their own accounts or subscriptions. The website does not contain copied lesson content, lab answers, or course solutions. Provider names identify the linked resources. This project is not affiliated with or endorsed by the training providers.

## Icon sources

Hack The Box, Python, and Linux symbols come from [Simple Icons](https://github.com/simple-icons/simple-icons), distributed under [CC0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md). These marks identify the corresponding platforms and resources. The other line symbols are drawn for this site. All symbols are displayed in monochrome.
