const express = require('express');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

// Render Markdown docs as a styled, readable HTML page.
// Registered BEFORE express.static so it wins over the raw .md file.
// Any *.md under /public/docs is rendered; links inside stay clickable.
app.get(/^\/docs\/.+\.md$/, (req, res, next) => {
  // Resolve safely inside /public and reject path traversal
  const rel = path.normalize(req.path).replace(/^(\.\.[/\\])+/, '');
  const file = path.join(PUBLIC, rel);
  if (!file.startsWith(PUBLIC)) return res.status(400).send('Bad path');

  fs.readFile(file, 'utf8', (err, md) => {
    if (err) return next(); // fall through to static / fallback

    // Prefer the first "# Heading" as the page title
    const m = md.match(/^#\s+(.+)$/m);
    const title = m ? m[1].trim() : path.basename(file);
    const body = marked.parse(md);

    res.type('html').send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} — NextRound</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/app.css" />
<link rel="stylesheet" href="/assets/doc.css" />
</head>
<body class="doc-body">
<header class="topbar">
  <div class="wrap nav">
    <a class="brand" href="/"><svg class="logo-mark" viewBox="0 0 40 40" fill="none"><rect x="2" y="8" width="26" height="24" rx="6" fill="#1a73e8"/><path d="M30 16.5 L37 12 V28 L30 23.5 Z" fill="#34a853"/><circle cx="12" cy="15.5" r="2.4" fill="#fbbc04"/><rect x="8" y="21" width="12" height="3.4" rx="1.7" fill="#fff" opacity=".9"/><circle cx="24.5" cy="27" r="2.2" fill="#ea4335"/></svg> NextRound</a>
    <nav class="nav-links">
      <a href="/">Home</a>
      <a href="/demo/">Demo</a>
      <a href="/mvp/">MVP spec</a>
      <a href="/journey/b2b.html">Journeys</a>
    </nav>
    <div class="nav-right">
      <a class="btn btn-outline btn-sm" href="/mvp/">Card view</a>
      <a class="btn btn-primary btn-sm" href="/demo/">Open the demo</a>
    </div>
  </div>
</header>
<main class="doc-wrap">
<article class="doc">
${body}
</article>
</main>
<footer class="foot">
  <div class="wrap foot-row">
    <a class="brand" href="/"><svg class="logo-mark" viewBox="0 0 40 40" fill="none"><rect x="2" y="8" width="26" height="24" rx="6" fill="#1a73e8"/><path d="M30 16.5 L37 12 V28 L30 23.5 Z" fill="#34a853"/><circle cx="12" cy="15.5" r="2.4" fill="#fbbc04"/><rect x="8" y="21" width="12" height="3.4" rx="1.7" fill="#fff" opacity=".9"/><circle cx="24.5" cy="27" r="2.2" fill="#ea4335"/></svg> NextRound</a>
    <span>Rendered from <code>${rel}</code></span>
    <span class="spacer">© 2026 NextRound</span>
  </div>
</footer>
</body>
</html>`);
  });
});

// Serve static assets (index.html, css/js/images, .md source) from /public
app.use(
  express.static(PUBLIC, {
    extensions: ['html'],
    maxAge: '1h',
  })
);

// Lightweight health check for uptime monitors / deploy platforms
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// SPA-style fallback: any unmatched GET returns the landing page
app.get('*', (_req, res) => {
  res.sendFile(path.join(PUBLIC, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NextRound landing page running on http://localhost:${PORT}`);
});
