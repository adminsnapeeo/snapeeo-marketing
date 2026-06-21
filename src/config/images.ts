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

/**
 * Service portfolios — one folder per service under public/images/portfolios/
 * @see public/images/portfolios/README.md
 */
export const PORTFOLIO_DIR = `${IMAGE_DIR}/portfolios`;

export const PORTFOLIO_SERVICE_IDS = [
  'pre-wedding',
  'birthday',
  'maternity',
  'baby',
  'corporate',
  'fashion',
  'product',
  'influencer',
  'college-universities',
] as const;

export type PortfolioServiceId = (typeof PORTFOLIO_SERVICE_IDS)[number];

export const PORTFOLIO_COVER_BASENAME = 'cover';
export const PORTFOLIO_ACCENT_BASENAME = '07-accent';

/** Base names only — use `.jpg` or `.png` in each service folder. */
export const PORTFOLIO_GALLERY_BASENAMES = [
  '01-featured',
  '02-wide',
  '03-tall',
  '04-normal',
  '05-normal',
  '06-wide',
  '07-accent',
] as const;

export const PORTFOLIO_IMAGE_EXTS = ['.jpg', '.png'] as const;

export function getPortfolioImageUrls(
  serviceId: string,
  basename: string,
): readonly string[] {
  return PORTFOLIO_IMAGE_EXTS.map(
    (ext) => `${PORTFOLIO_DIR}/${serviceId}/${basename}${ext}`,
  );
}

export function getServiceCoverUrl(serviceId: string): string {
  return getPortfolioImageUrls(serviceId, PORTFOLIO_COVER_BASENAME)[0];
}

export function getServiceCoverFallbacks(serviceId: string): string[] {
  return getPortfolioImageUrls(serviceId, PORTFOLIO_COVER_BASENAME).slice(1);
}

/** Accent shot — used on the All Services cards. */
export function getServiceAccentUrl(serviceId: string): string {
  return getPortfolioImageUrls(serviceId, PORTFOLIO_ACCENT_BASENAME)[0];
}

/** Accent first, then cover, for service listing cards. */
export function getServiceCardImageUrl(serviceId: string): string {
  return getServiceAccentUrl(serviceId);
}

export function getServiceCardImageFallbacks(serviceId: string): string[] {
  const accentUrls = getPortfolioImageUrls(serviceId, PORTFOLIO_ACCENT_BASENAME);
  const coverUrls = getPortfolioImageUrls(serviceId, PORTFOLIO_COVER_BASENAME);
  return [...accentUrls.slice(1), ...coverUrls];
}

export function getServicePortfolioImageUrl(
  serviceId: string,
  basename: (typeof PORTFOLIO_GALLERY_BASENAMES)[number],
): string {
  return getPortfolioImageUrls(serviceId, basename)[0];
}

export function getServicePortfolioImageFallbacks(
  serviceId: string,
  basename: (typeof PORTFOLIO_GALLERY_BASENAMES)[number],
): string[] {
  return getPortfolioImageUrls(serviceId, basename).slice(1);
}
