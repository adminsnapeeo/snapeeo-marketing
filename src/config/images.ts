/**
 * Static image paths — files in public/images/
 */
export const IMAGE_DIR = '/images';
export const GALLERY_STRIP_DIR = `${IMAGE_DIR}/gallery`;

export const staticPhotos = [
  `${IMAGE_DIR}/hawa-mahal.jpg`,
  `${IMAGE_DIR}/Jantar-mantar.jpg`,
  `${IMAGE_DIR}/Jantar-mantar2.jpg`,
] as const;

/** Pick a photo by index (cycles through your images). */
export function getStaticPhoto(index: number): string {
  return staticPhotos[index % staticPhotos.length];
}

/**
 * Gallery strip — drop files in public/images/gallery/ named:
 *   snapeeo-gallery-1.webp, snapeeo-gallery-2.webp, …
 * Set GALLERY_STRIP_COUNT to how many you've added.
 * @see public/images/gallery/README.md
 */
export const GALLERY_STRIP_COUNT = 4;
export const GALLERY_STRIP_EXT = '.png';
/** Per-image extension when files differ (gallery-1, gallery-2, …). */
export const GALLERY_STRIP_EXTS = ['.png', '.png', '.jpeg', '.JPG'] as const;

export const galleryStripItems = Array.from({ length: GALLERY_STRIP_COUNT }, (_, index) => {
  const n = index + 1;
  const ext = GALLERY_STRIP_EXTS[index] ?? GALLERY_STRIP_EXT;
  return {
    id: `strip-${n}`,
    src: `${GALLERY_STRIP_DIR}/snapeeo-gallery-${n}${ext}`,
    alt: `Snapeeo gallery ${n}`,
  };
});

/** Hero carousel — one slide per image. */
export const heroImages = staticPhotos.map(String);

/** About section featured image */
export const aboutImage = staticPhotos[0];
