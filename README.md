# WorstOfficerEver

This repository includes a standalone interactive Pythagoras theorem visualizer:

- `pythagoras-3d.html` — browser-based canvas scene with:
  - Adjustable triangle legs (`a`, `b`)
  - Adjustable prism depth and view scale
  - Live shape redraw when sliders move
  - Live numeric verification of `a² + b² = c²`

## Run locally

Open `pythagoras-3d.html` in a modern browser.

Optional local static server:

```bash
python3 -m http.server 8080
```

Then visit:

- <http://localhost:8080/pythagoras-3d.html>
