# WorstOfficerEver

This repository now includes a standalone interactive 3D visualization of the Pythagorean theorem:

- `pythagoras-3d.html` — browser-based Three.js scene with:
  - Adjustable triangle legs (`a`, `b`)
  - Adjustable prism height and opacity
  - Optional wireframe mode, labels, and auto-rotation
  - Live numeric verification of `a² + b² = c²`

## Run locally

Open `pythagoras-3d.html` in a modern browser.

If your browser blocks module imports from `file://`, run a quick local static server, e.g.:

```bash
python3 -m http.server 8080
```

Then visit:

- <http://localhost:8080/pythagoras-3d.html>
