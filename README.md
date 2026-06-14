# Snapeeo

Premium photography booking marketing site — React + Vite + TypeScript + Tailwind CSS.

**Live features:** Home, Services, About, Contact views · gallery lightbox · mobile navigation · instant-booking UI mockup

## Quick start (local)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
```

Build verified: `npm run build` runs TypeScript check + Vite production bundle.

## Images

Add your photos to `public/images/` before building:

```
public/images/hawa-mahal.jpg
public/images/Jantar-mantar.jpg
public/images/Jantar-mantar2.jpg
```

## Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for DevOps instructions (Docker, nginx, static hosting, CI).

**Docker one-liner:**

```bash
docker build -t snapeeo-web . && docker run -p 8080:80 snapeeo-web
```

## GitHub setup (first time)

1. Create a new repository on GitHub (e.g. `snapeeo-web`).
2. In this project folder:

```bash
git init
git add .
git commit -m "Initial commit: Snapeeo marketing site"
git branch -M main
git remote add origin https://github.com/YOUR_ORG/YOUR_REPO.git
git push -u origin main
```

3. Share the repo URL with your DevOps engineer — they can use `DEPLOYMENT.md` and the included `Dockerfile` / `nginx.conf`.

**Do not commit:** `node_modules/`, `dist/`, `.env` files (already in `.gitignore`).

## Tech stack

| Layer | Choice |
|-------|--------|
| UI | React 18, TypeScript |
| Build | Vite 5 |
| Styles | Tailwind CSS 3 |
| Icons | lucide-react |

## Project structure

```
src/
  components/   # UI, layout, home sections, services, gallery
  config/       # image paths
  data/         # static content (services, FAQs, testimonials)
  context/      # app navigation state
public/         # favicon, static images
dist/           # production build output (generated, not committed)
```

## License

Private — Snapeeo Inc.
