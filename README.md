# JP Corps landing page

Static site. The top of the page is a scroll-driven flight through five paper-craft dioramas
(pre-rendered video clips scrubbed by scroll position); the full content follows as normal sections.

- `index.html`: page content and the flight config (`mountScrollWorld({...})`: per-scene copy, clips, connectors)
- `styles.css`, `main.js`: page styling and UI behaviour
- `assets/scrub-engine.js`: scroll-scrub engine from [oso95/scroll-world](https://github.com/oso95/scroll-world) (MIT)
- `assets/vid/`: 5 scene clips (`hq`, `strategi`, `operasional`, `teknologi`, `hasil`) and 4 connectors (`conn1`–`conn4`); `-m` files are lighter 720p versions served on phones
- `assets/still/`: first frame of each scene, shown until its clip loads

## Replacing a clip

Encode for scrubbing (dense keyframes, no audio):

```bash
ffmpeg -i src.mp4 -an -vf "unsharp=5:5:0.8:5:5:0.0" -c:v libx264 -preset slow -crf 20 \
  -pix_fmt yuv420p -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart assets/vid/NAME.mp4
ffmpeg -i src.mp4 -an -vf "scale=-2:720,unsharp=5:5:0.6:5:5:0.0" -c:v libx264 -preset slow -crf 23 \
  -pix_fmt yuv420p -g 4 -keyint_min 4 -sc_threshold 0 -movflags +faststart assets/vid/NAME-m.mp4
```

A connector must start on the previous scene clip's last frame and end on the next scene clip's
first frame, or the seam will jump.
