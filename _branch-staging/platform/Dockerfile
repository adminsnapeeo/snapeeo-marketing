# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITE_ROOT_DOMAIN=snapeeo.com
ARG VITE_WEB_ORIGIN=https://app.snapeeo.com
ARG VITE_ADMIN_ORIGIN=https://admin.snapeeo.com
ARG VITE_COOKIE_DOMAIN=.snapeeo.com

ENV VITE_ROOT_DOMAIN=$VITE_ROOT_DOMAIN
ENV VITE_WEB_ORIGIN=$VITE_WEB_ORIGIN
ENV VITE_ADMIN_ORIGIN=$VITE_ADMIN_ORIGIN
ENV VITE_COOKIE_DOMAIN=$VITE_COOKIE_DOMAIN

RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY docker/nginx/spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1
