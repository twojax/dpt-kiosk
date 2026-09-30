# DPT Development kiosk screen

React + TypeScript on Vite. Built on a fixed 1920 × 1080 stage that scales to
fit any display, so every position comes straight from the comp in pixels.

## Run it

With Vite+ installed (`curl -fsSL https://vite.plus | bash`):

```bash
vp install
vp dev          # local dev server
vp build        # production build into dist/
```

To switch the project fully onto the Vite+ toolchain (config, lint, format),
run `vp migrate` once. Plain `npm install && npm run dev` also works.

## Drop in the real assets

Put these in `public/assets/`. Until each one exists, the app shows a labelled
placeholder or fallback in its place.

| File                     | Used for                          |
| ------------------------ | --------------------------------- |
| `bg-bubbles.jpg`         | Full-screen background, 1920×1080 |
| `development-hub.jpg`    | Photo inside the circle, 428×428+ |
| `formulations.jpg`       | Panel image, 564×380+             |
| `analytical.jpg`         | Panel image                       |
| `scale-up.jpg`           | Panel image                       |
| `viatris-dpt-logo.svg`   | Bottom-left logo, white           |

The microscope in `src/components/Icons.tsx` is a stand-in; replace it with the
agency's SVG.

## Where to change things

- `src/content.ts` — all copy, image paths, button and panel positions, idle timeout
- `src/geometry.ts` — how the arc, nodes and connector lines are derived
- `src/styles.css` — colours, type and transitions

Each hub screen (`development`, `semiSolids`) is a `HubPage` in `content.ts` with
its own hub position, panel rect and `sections`. Adding a button is one more
entry in `sections` with a `nodeAngle` and `pill` position; leave out `title`
for a panel that's just body text and an image.

## Behaviour

- Tap a button to open its panel; tap it again or tap empty background to close.
- All panels stay mounted, so images are loaded before the first tap.
- After 90 s with no input the screen resets to the homepage.
- `?kiosk` in the URL hides the cursor. Long-press menus and pinch-zoom are blocked.

## Show machine

`vite.config.ts` sets `base: './'`, so `dist/` runs from any folder or a local
static server. Launch Chrome with, for example:

```bash
chrome --kiosk --noerrdialogs --disable-pinch --overscroll-history-navigation=0 \
  --disable-features=Translate "http://localhost:4173/?kiosk"
```
