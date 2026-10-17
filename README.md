# JP Corps landing page

Static site with a scroll-driven 3D world (Three.js). The page content is plain HTML over the world.

- `index.html`, `styles.css`, `main.js`: page content and UI behaviour
- `src/world.js`: the 3D world (city, landmarks per section, camera path)
- `assets/world.js`: bundled build of `src/world.js` (this is what the page loads)
- `assets/hero.mp4`, `assets/hero-poster.jpg`: video shown on the hero disc

## Editing the 3D world

```bash
npm install
npm run build   # rebuilds assets/world.js from src/world.js
```

Content in `index.html` is read by the world: each `[data-stop]` section is a stop on the
camera path, and each `.work-list li` becomes a floating project disc.
