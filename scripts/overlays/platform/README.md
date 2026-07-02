# Snapeeo Web (platform branch)

Customer-facing app — auth and welcome flows.

**Repo:** [snapeeo-marketing](https://github.com/adminsnapeeo/snapeeo-marketing) · **Branch:** `platform`  
**Subdomain:** `app.snapeeo.com`

## Setup

```bash
npm install
npm run dev
```

Local: http://localhost:5174

## Routes

| Path | Page |
|------|------|
| `/` | Welcome |
| `/sign-in` | Sign in |
| `/sign-up` | Sign up |

## Docker

```bash
copy .env.docker.example .env.docker
docker compose --env-file .env.docker up --build -d
```

See `docs/DEPLOYMENT.md` in the marketing repo docs or branch notes for full deploy instructions.
