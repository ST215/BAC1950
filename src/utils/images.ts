import type { ImageMetadata } from 'astro';

const sourceImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{png,jpg,jpeg,gif,webp,avif,svg}',
  { eager: true }
);

export function resolveImage(path: string): ImageMetadata {
  const key = path.startsWith('/src') ? path : `/src${path}`;
  const entry = sourceImages[key];
  if (!entry) {
    throw new Error(`resolveImage: no file found for "${path}" (expected at ${key})`);
  }
  return entry.default;
}
