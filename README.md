# OreFinder — Minecraft Toolkit

A static, beginner-friendly Minecraft helper website intended for GitHub Pages.

## Included
- Seed tool shortcut to a third-party seed map.
- Coordinate and ore note helper.
- Local screenshot preview with zoom.
- Starter guidance for making a separate Fabric in-game mod.

## Important limitations
This starter site does **not** calculate hidden ore blocks from a seed, automatically detect ores in screenshots, or scan a live Minecraft process. A normal static website cannot do those things by itself. The seed map is an external tool and its supported versions/data may differ. The coordinate helper saves a note on screen only.

## Publish on GitHub Pages
1. Sign in at https://github.com and create a new public repository, e.g. `minecraft-ore-finder`.
2. Upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub to provide the Pages URL in that section.

## Run locally
Open `index.html` in a modern browser. No build tools are required.

## Tech
Plain HTML, CSS and JavaScript. No accounts, backend, or API keys required.
