# Snapeeo static images

Your current photos:

| File | Used on |
|------|---------|
| `hawa-mahal.jpg` | Hero, gallery, services, about |
| `Jantar-mantar.jpg` | Hero, gallery, services |
| `Jantar-mantar2.jpg` | Hero, gallery, services |

## Home gallery strip

Photos for the polaroid carousel live in **`gallery/`**. Name them `snapeeo-gallery-1.webp`, `snapeeo-gallery-2.webp`, etc., then set `GALLERY_STRIP_COUNT` in `src/config/images.ts`. See `gallery/README.md`.

## Add more photos

1. Drop new files into this folder.
2. Add their paths to `staticPhotos` in `src/config/images.ts`.

Any image size works — the site crops them to fixed frames automatically.
