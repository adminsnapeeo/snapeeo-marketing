# Snapeeo Admin (admin branch)

Internal admin panel.

**Repo:** [snapeeo-marketing](https://github.com/adminsnapeeo/snapeeo-marketing) · **Branch:** `admin`  
**Subdomain:** `admin.snapeeo.com`

## Setup

```bash
npm install
npm run dev
```

Local: http://localhost:5175

## Docker

```bash
copy .env.docker.example .env.docker
docker compose --env-file .env.docker up --build -d
```

Scaffold only — dashboard and auth coming later.
