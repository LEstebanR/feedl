# apps/widget — LESFeedback Embeddable Widget

## Overview

Self-contained JavaScript snippet that any website can embed to collect user feedback. Builds to a single IIFE JS file hosted on a CDN.

- **URL (prod)**: `https://widget.lesfeedback.com/widget.js`
- **Package**: `@lesfeedback/widget`

## Stack

- Vite (library mode, IIFE output)
- Preact (React-compatible, ~3kb — keeps bundle small)
- TypeScript
- Injected CSS (no external stylesheets)

## How It Works

End users paste this into any HTML page:

```html
<script
  src="https://widget.lesfeedback.com/widget.js"
  data-api-key="YOUR_API_KEY"
  async
></script>
```

Or initialize manually:

```js
window.LESFeedback.init({ apiKey: 'YOUR_API_KEY' })
```

The widget injects a floating button (bottom-right) + feedback form into the host page. On submit it calls `POST /api/feedback` on the dashboard app.

## Structure

```
src/
  main.ts       # entry point — reads data-api-key, calls init(), exposes window.LESFeedback
  widget.tsx    # Preact component — floating button + form UI
vite.config.ts  # IIFE build config
```

## Package Manager

**Always use `bun`.**

```bash
bun run build    # build → dist/widget.iife.js
bun run dev      # vite dev server (for local testing)
bun run typecheck
```

## Non-negotiable Constraints

- **Bundle size**: target <20kb gzipped. Check after every build: `bun run build && ls -lh dist/`
- **No external deps at runtime** — Preact is bundled in. Never add React, Vue, or heavy libraries.
- **No global style pollution** — use Shadow DOM or scoped inline styles. Never write to `document.body.style` or add global `<style>` tags.
- **Works on any website** — no assumptions about host framework (React, Vue, WordPress, plain HTML all must work)
- **Graceful errors** — network failures must show an error state, never crash or throw to the host page

## Style Rules

All styles are injected as a `<style>` string inside the component. Use the `STYLES` constant in `widget.tsx`. Use plain CSS — no Tailwind, no CSS modules.

## API Call

The widget calls the dashboard API:

```ts
fetch(`${API_URL}/api/feedback`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ apiKey, rating, text, metadata: { url: location.href } }),
})
```

`API_URL` is set via `VITE_API_URL` env var (defaults to `https://app.lesfeedback.com`). For local dev, create `.env.local`:

```
VITE_API_URL=http://localhost:3001
```

## Git

**Never run `git add` or `git commit`** — the user handles all commits.

## Testing Locally

Build the widget, then open the test file in a browser:

```bash
bun run build
# open test.html in browser (create it at apps/widget/test.html)
```

Example `test.html`:
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Test page</h1>
    <script src="./dist/widget.iife.js" data-api-key="test-key"></script>
  </body>
</html>
```
