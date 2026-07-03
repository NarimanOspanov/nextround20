const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (index.html, future css/js/images) from /public
app.use(
  express.static(path.join(__dirname, 'public'), {
    extensions: ['html'],
    maxAge: '1h',
  })
);

// Lightweight health check for uptime monitors / deploy platforms
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// SPA-style fallback: any unmatched GET returns the landing page
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NextRound landing page running on http://localhost:${PORT}`);
});
