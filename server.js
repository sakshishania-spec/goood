// Goood — Mood Check-in prototype server
// Serves the self-contained prototype in public/ locally and on Vercel.

const path = require("path");
const express = require("express");

const app = express();
const PUBLIC_DIR = path.join(__dirname, "public");
const INDEX = path.join(PUBLIC_DIR, "index.html");

app.disable("x-powered-by");

// Health check for uptime monitors
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "goood-mood-checkin", time: new Date().toISOString() });
});

// Static files. The prototype is one large HTML file, so let browsers cache it briefly
// but always revalidate, so a new deploy shows up on the next reload.
app.use(
  express.static(PUBLIC_DIR, {
    extensions: ["html"],
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    },
  })
);

// Any other route shows the prototype
app.get("*", (req, res) => {
  res.sendFile(INDEX);
});

// On Vercel the app is exported and Vercel handles the listening; locally we listen on PORT.
if (!process.env.VERCEL) {
  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, () => {
    console.log(`Goood prototype running at http://localhost:${PORT}`);
  });
}

module.exports = app;
