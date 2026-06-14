/**
 * Static image paths — files in public/images/
 */
export const IMAGE_DIR = '/images';

export const staticPhotos = [
  `${IMAGE_DIR}/hawa-mahal.jpg`,
  `${IMAGE_DIR}/Jantar-mantar.jpg`,
  `${IMAGE_DIR}/Jantar-mantar2.jpg`,
] as const;

/** Pick a photo by index (cycles through your images). */
export function getStaticPhoto(index: number): string {
  return staticPhotos[index % staticPhotos.length];
}

/** Hero carousel — one slide per image. */
export const heroImages = staticPhotos.map(String);

/** About section featured image */
export const aboutImage = staticPhotos[0];
