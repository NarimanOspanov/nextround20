# NextRound — Landing Page

Google Meet-style marketing landing page for **NextRound**, served by a minimal Express server.

## Structure

```
nextround20/
├── public/
│   └── index.html      # the landing page (self-contained: HTML + CSS + JS)
├── server.js           # Express static server
├── package.json
├── .gitignore
└── README.md
```

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

Set a custom port with `PORT=8080 npm start`.

## Endpoints

- `/`         → serves `public/index.html`
- `/health`   → `{ "status": "ok" }` (uptime checks)
- `*`         → falls back to the landing page

## Deploy

Works out of the box on any Node host (Render, Railway, Fly.io, Heroku, a VM, etc.).
The server reads `process.env.PORT`, so no config change is needed on platforms that
inject a port.

**Render / Railway example**
- Build command: `npm install`
- Start command: `npm start`

## Notes

- The page is a single self-contained HTML file. To add assets (images, extra CSS/JS),
  drop them in `public/` and reference them with root-relative paths (e.g. `/logo.svg`).
