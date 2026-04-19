const fs = require("fs");
const path = require("path");

const galleriesDir = path.join(__dirname, "..", "assets", "images", "events");

module.exports = function () {
  const out = {};
  if (!fs.existsSync(galleriesDir)) return out;
  for (const slug of fs.readdirSync(galleriesDir)) {
    const manifestPath = path.join(galleriesDir, slug, "manifest.json");
    if (fs.existsSync(manifestPath)) {
      try {
        out[slug] = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      } catch (e) {
        out[slug] = null;
      }
    }
  }
  return out;
};
