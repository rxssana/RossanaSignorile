import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const uploadsDir = path.join(root, "public", "uploads");
const webDir = path.join(root, "asset", "web");
const contentDir = path.join(root, "src", "content");
const maxSize = 1600;
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const exists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const listImages = async (dir) => {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listImages(entryPath);
      return imageExtensions.has(path.extname(entry.name).toLowerCase()) ? [entryPath] : [];
    }),
  );
  return files.flat();
};

const uniqueOutputPath = async (name) => {
  const parsed = path.parse(name);
  let candidate = path.join(webDir, name);
  let count = 1;

  while (await exists(candidate)) {
    candidate = path.join(webDir, `${parsed.name}-${count}${parsed.ext}`);
    count += 1;
  }

  return candidate;
};

const optimizeImage = async (inputPath) => {
  await fs.mkdir(webDir, { recursive: true });
  const outputPath = await uniqueOutputPath(path.basename(inputPath));
  const ext = path.extname(outputPath).toLowerCase();
  let pipeline = sharp(inputPath).rotate().resize({
    width: maxSize,
    height: maxSize,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  if (ext === ".webp") pipeline = pipeline.webp({ quality: 82 });

  await pipeline.toFile(outputPath);
  return `/asset/web/${path.basename(outputPath)}`;
};

const replaceInJson = (value, replacements) => {
  if (Array.isArray(value)) return value.map((item) => replaceInJson(item, replacements));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, replaceInJson(item, replacements)]),
    );
  }
  if (typeof value === "string") return replacements.get(value) ?? value;
  return value;
};

const rewriteContent = async (replacements) => {
  const entries = await fs.readdir(contentDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map(async (entry) => {
        const filePath = path.join(contentDir, entry.name);
        const json = JSON.parse(await fs.readFile(filePath, "utf8"));
        const rewritten = replaceInJson(json, replacements);
        await fs.writeFile(filePath, `${JSON.stringify(rewritten, null, 2)}\n`);
      }),
  );
};

// Resize an image in place (overwrite the same file, keeping its name so that
// references in the content JSON stay valid). Only used for images that are
// larger than maxSize; already-optimized images are skipped to avoid
// re-encoding them on every build.
const optimizeInPlace = async (inputPath) => {
  const ext = path.extname(inputPath).toLowerCase();
  const tmpPath = `${inputPath}.tmp`;
  let pipeline = sharp(inputPath).rotate().resize({
    width: maxSize,
    height: maxSize,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  if (ext === ".webp") pipeline = pipeline.webp({ quality: 82 });

  await pipeline.toFile(tmpPath);
  await fs.rename(tmpPath, inputPath);
};

// 1) Legacy flow: anything dropped into public/uploads gets optimized, moved
//    into asset/web, and its references rewritten in the content JSON.
const images = await listImages(uploadsDir);
const replacements = new Map();

for (const image of images) {
  const publicPath = `/uploads/${path.relative(uploadsDir, image).split(path.sep).join("/")}`;
  replacements.set(publicPath, await optimizeImage(image));
  await fs.rm(image);
}

if (replacements.size > 0) {
  await rewriteContent(replacements);
  console.log(`Optimized ${replacements.size} legacy upload(s) from public/uploads.`);
}

// 2) Current flow: the CMS uploads straight into asset/web. Resize any image
//    that is still larger than maxSize, in place, leaving its path unchanged.
const webImages = await listImages(webDir);
let resized = 0;

for (const image of webImages) {
  try {
    const { width, height } = await sharp(image).metadata();
    if ((width ?? 0) > maxSize || (height ?? 0) > maxSize) {
      await optimizeInPlace(image);
      resized += 1;
      console.log(`Resized ${path.relative(root, image)} (${width}x${height} -> max ${maxSize}px).`);
    }
  } catch (error) {
    console.warn(`Skipped ${path.relative(root, image)}: ${error.message}`);
  }
}

if (replacements.size === 0 && resized === 0) {
  console.log("No images to optimize.");
} else if (resized > 0) {
  console.log(`Resized ${resized} oversized image(s) in asset/web.`);
}
