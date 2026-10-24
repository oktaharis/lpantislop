# JP Corps landing page

Static site. The top of the page is a scroll-driven flight through five paper-craft dioramas;
the full content follows as normal sections.

- `index.html`: page content and the flight config (`mountScrollWorld({...})`: per-scene copy and sequences)
- `styles.css`, `main.js`: page styling and UI behaviour
- `assets/scrub-engine.js`: scroll engine adapted from [oso95/scroll-world](https://github.com/oso95/scroll-world) (MIT); draws image sequences on a canvas
- `assets/seq/<name>/d|m/NNN.webp`: frames per scene (`hq`, `strategi`, `operasional`, `teknologi`, `hasil`) and connector (`conn1`–`conn4`); `d` 1280×720 for desktop, `m` a 406×720 centre crop for phones
- `assets/flight-curves.js`: frame count and scroll weight per sequence
- `assets/still/`: first frame of each scene, shown until its frames arrive
- `assets/brand/`: logo, mark and favicons
- `assets/lenis.min.js`: smooth wheel scrolling (MIT)

## How the flight loads

A black brand screen shows the logo while the first two sequences load their coarse frames
(every 8th). Frames then load coarse to fine (every 16th, 8th, 4th, 2nd, then all), nearest
segments first, so any scene can be scrubbed long before all of its frames have arrived. If a
visitor outruns the download, scrolling pauses just before the next segment.

## Rebuilding the frames

The source clips are AI camera flights (8 s, 24 fps). Each clip's frames are picked so every
step shows about the same amount of motion, and busier clips get more frames and more scroll:

1. Measure frame-to-frame motion per clip and build a time curve from it (cumulative motion).
2. Pick `count` source frames along that curve (72 to 150 per clip, by relative motion).
3. Export `d` at 1280×720 (`libwebp -quality 68`) and `m` as `crop=608:1080,scale=406:720` (`-quality 64`).
4. Update `count` and `weight` in `assets/flight-curves.js`.

A connector must start on the previous scene's last frame and end on the next scene's
first frame, or the seam will jump.
