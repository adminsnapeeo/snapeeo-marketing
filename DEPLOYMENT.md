# Snapeeo — Deployment Guide

This is a **static React SPA** built with Vite. There is no backend server in this repository.

## Build output

| Item | Value |
|------|-------|
| Build command | `npm ci && npm run build` |
| Output folder | `dist/` |
| Node.js version | **20.x** (LTS recommended) |
| Package manager | npm (`package-lock.json` committed) |

## Environment variables

No secrets or API keys are required for the current site.

Optional:

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_BASE` | `/` | Set if hosting under a sub-path (e.g. `/snapeeo/`) |

Example:

```bash
VITE_BASE=/ npm run build
```

## Static assets

Place photography images in `public/images/` before building:

- `hawa-mahal.jpg`
- `Jantar-mantar.jpg`
- `Jantar-mantar2.jpg`

These are copied into `dist/images/` during `npm run build`.

## Deployment options

### Option A — Docker (recommended)

```bash
docker build -t snapeeo-web .
docker run -p 8080:80 snapeeo-web
```

Open `http://localhost:8080`.

The image uses **nginx** with SPA fallback (`try_files` → `index.html`).

### Option B — Static hosting (S3, Netlify, Vercel, Azure Static Web Apps, etc.)

1. Run `npm ci && npm run build`
2. Upload the contents of **`dist/`** to the static host
3. Configure **SPA fallback**: all unknown paths → `index.html`

**Netlify / Vercel:** zero-config for Vite — connect repo and set build command to `npm run build`, publish directory `dist`.

**AWS S3 + CloudFront:** upload `dist/` to bucket; set CloudFront custom error 403/404 → `/index.html` with 200.

**Nginx (bare metal / VM):**

```nginx
root /var/www/snapeeo;
index index.html;
location / {
    try_files $uri $uri/ /index.html;
}
```

See `nginx.conf` in the repo root for a full example with caching headers.

### Option C — GitHub Actions artifact

On push to `main`, CI runs `npm run build` and uploads `dist/` as an artifact (7-day retention). Download from the Actions tab for manual deploy.

## CI pipeline

`.github/workflows/ci.yml` runs on push/PR to `main` or `master`:

1. `npm ci`
2. `npm run build`

## Health check

After deploy, verify:

- [ ] Home page loads
- [ ] Header navigation (Home, Services, About, Contact) works
- [ ] Images in gallery/hero display (requires files in `public/images/`)
- [ ] Mobile hamburger menu opens and closes

## Contact info (static, no form backend)

The contact form is UI-only (no API). Contact details shown on site:

- Address: India (launch cities TBA)
- Email: admin.snapeeo@gmail.com
- Phone: +91 9879879879

If form submission is needed later, wire the form to a backend or service (e.g. Formspree, SendGrid, custom API).
