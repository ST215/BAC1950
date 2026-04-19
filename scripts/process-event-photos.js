#!/usr/bin/env node
/*
 * Pre-processes large Sony-camera JPGs from an external folder into
 * repo-friendly WebP assets for a given event slug.
 *
 * Usage:
 *   npm run process-event -- --src "/path/to/raw/folder" --slug my-event-slug
 *
 * Options:
 *   --src <dir>       Required. Source folder containing .JPG / .JPEG / .PNG originals.
 *   --slug <slug>     Required. Target subdir under src/assets/images/events/<slug>/.
 *   --max <px>        Max long edge for resized output. Default 2400.
 *   --quality <n>     WebP quality 1-100. Default 82.
 *   --dry             Print what would happen; don't write files.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

function parseArgs(argv) {
  const out = { max: 2400, quality: 82, dry: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--src") out.src = argv[++i];
    else if (arg === "--slug") out.slug = argv[++i];
    else if (arg === "--max") out.max = parseInt(argv[++i], 10);
    else if (arg === "--quality") out.quality = parseInt(argv[++i], 10);
    else if (arg === "--dry") out.dry = true;
  }
  if (!out.src || !out.slug) {
    console.error("ERROR: --src and --slug are required.");
    process.exit(1);
  }
  return out;
}

async function getTimestamp(filePath) {
  try {
    const meta = await sharp(filePath).metadata();
    const exifDate = meta.exif ? extractExifDate(meta.exif) : null;
    if (exifDate) return exifDate;
  } catch (e) {}
  return fs.statSync(filePath).mtime.getTime();
}

function extractExifDate(exifBuffer) {
  const str = exifBuffer.toString("binary");
  const m = str.match(/(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
  if (!m) return null;
  const [, y, mo, d, h, mi, s] = m;
  return new Date(`${y}-${mo}-${d}T${h}:${mi}:${s}`).getTime();
}

async function processPhoto(src, dest, maxEdge, quality) {
  const img = sharp(src).rotate().withMetadata({ orientation: undefined });
  const meta = await img.metadata();
  const longEdge = Math.max(meta.width, meta.height);
  const scale = longEdge > maxEdge ? maxEdge / longEdge : 1;
  const outW = Math.round(meta.width * scale);
  const outH = Math.round(meta.height * scale);

  await img
    .resize({ width: outW, height: outH, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(dest);

  return { width: outW, height: outH };
}

function pad(n, width) {
  return String(n).padStart(width, "0");
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const projectRoot = path.resolve(__dirname, "..");
  const destDir = path.join(projectRoot, "src", "assets", "images", "events", opts.slug);

  if (!fs.existsSync(opts.src)) {
    console.error(`ERROR: source folder not found: ${opts.src}`);
    process.exit(1);
  }

  if (!opts.dry) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(opts.src);
  const jpgs = entries.filter((f) => /\.(jpe?g)$/i.test(f));
  const flyer = entries.find((f) => /flyer.*\.(png|jpe?g)$/i.test(f));

  console.log(`Source: ${opts.src}`);
  console.log(`Destination: ${destDir}`);
  console.log(`Photos to process: ${jpgs.length}`);
  console.log(`Flyer: ${flyer || "(none found)"}`);
  console.log(`Max edge: ${opts.max}px  Quality: ${opts.quality}  Dry: ${opts.dry}`);

  const withTs = await Promise.all(
    jpgs.map(async (f) => ({ file: f, ts: await getTimestamp(path.join(opts.src, f)) }))
  );
  withTs.sort((a, b) => a.ts - b.ts);

  const pad2 = jpgs.length >= 100 ? 3 : 2;
  const manifestItems = [];
  let i = 1;

  for (const { file } of withTs) {
    const src = path.join(opts.src, file);
    const outName = `img-${pad(i, pad2)}.webp`;
    const dest = path.join(destDir, outName);
    process.stdout.write(`  [${i}/${jpgs.length}] ${file} -> ${outName} `);
    if (opts.dry) {
      console.log("(dry)");
    } else {
      const { width, height } = await processPhoto(src, dest, opts.max, opts.quality);
      const sizeKb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`${width}x${height}  ${sizeKb} KB`);
      manifestItems.push({
        file: outName,
        width,
        height,
        alt: `Photo ${i} from the From the Frontline to the Forefront event`,
      });
    }
    i++;
  }

  if (flyer) {
    const flyerDest = path.join(destDir, "flyer" + path.extname(flyer).toLowerCase());
    console.log(`\nCopying flyer: ${flyer} -> ${path.basename(flyerDest)}`);
    if (!opts.dry) fs.copyFileSync(path.join(opts.src, flyer), flyerDest);
  }

  if (!opts.dry) {
    const manifestPath = path.join(destDir, "manifest.json");
    fs.writeFileSync(
      manifestPath,
      JSON.stringify(
        {
          slug: opts.slug,
          processedAt: new Date().toISOString(),
          count: manifestItems.length,
          images: manifestItems,
        },
        null,
        2
      )
    );
    console.log(`\nManifest written: ${manifestPath}`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
