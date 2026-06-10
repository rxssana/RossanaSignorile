// All site images, bundled by Vite from the web-optimized copies in
// asset/web/ (generated from the originals, max 1600px).
const assetModules = import.meta.glob("../../asset/web/*.{jpg,JPG,jpeg,JPEG,png,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const asset = (path: string) => {
  const url = assetModules[`../../asset/web/${path}`];
  if (!url && import.meta.env.DEV) console.warn(`Missing asset: ${path}`);
  return url ?? "";
};

export interface EditableImage {
  src?: string;
  rotation?: number | string;
}

export type EditableImageValue = string | EditableImage | undefined | null;

export const mediaPath = (image?: EditableImageValue) => {
  if (!image) return "";
  return typeof image === "string" ? image : image.src ?? "";
};

export const mediaAsset = (image?: EditableImageValue) => {
  const path = mediaPath(image);
  if (!path) return "";
  if (path.startsWith("/asset/web/")) {
    return asset(path.replace("/asset/web/", ""));
  }
  if (path.startsWith("/") || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return asset(path);
};

export const mediaRotation = (image?: EditableImageValue) => {
  if (!image || typeof image === "string") return 0;
  const rotation = Number(image.rotation ?? 0);
  return Number.isFinite(rotation) ? rotation : 0;
};

export const resolveMedia = (image?: EditableImageValue) => ({
  src: mediaAsset(image),
  rotation: mediaRotation(image),
});

export const resolveMediaList = (images: EditableImageValue[]) => images.map(resolveMedia);

export const mediaStyle = (image?: EditableImageValue) => {
  const rotation = mediaRotation(image);
  return rotation ? { transform: `rotate(${rotation}deg)` } : undefined;
};

export const mediaKey = (image?: EditableImageValue) => {
  const path = mediaPath(image);
  return `${path}-${mediaRotation(image)}`;
};
