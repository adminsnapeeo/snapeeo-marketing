import { services } from './data/content';
import type { ViewId } from './types';

export interface AppRoute {
  view: ViewId;
  serviceId: string | null;
  sectionId: string | null;
}

function getBasePath(): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') return '';
  return base.replace(/\/$/, '');
}

export function getAppPathname(): string {
  const base = getBasePath();
  let path = window.location.pathname;

  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  return path;
}

export function isValidServiceId(id: string): boolean {
  return services.some((service) => service.id === id);
}

export function parseRoute(): AppRoute {
  const pathname = getAppPathname();
  const sectionId = window.location.hash.replace(/^#/, '') || null;

  if (pathname === '/' || pathname === '') {
    return { view: 'home', serviceId: null, sectionId };
  }

  if (pathname === '/services') {
    return { view: 'services', serviceId: null, sectionId: null };
  }

  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const serviceId = isValidServiceId(serviceMatch[1]) ? serviceMatch[1] : null;
    return { view: 'services', serviceId, sectionId: null };
  }

  if (pathname === '/about') {
    return { view: 'about', serviceId: null, sectionId: null };
  }

  if (pathname === '/contact') {
    return { view: 'contact', serviceId: null, sectionId: null };
  }

  return { view: 'home', serviceId: null, sectionId: null };
}

export function buildRouteUrl(
  view: ViewId,
  options?: { serviceId?: string | null; sectionId?: string | null },
): string {
  const base = getBasePath();
  const { serviceId, sectionId } = options ?? {};

  let path: string;
  switch (view) {
    case 'home':
      path = `${base}/`;
      break;
    case 'services':
      path =
        serviceId && isValidServiceId(serviceId)
          ? `${base}/services/${serviceId}`
          : `${base}/services`;
      break;
    case 'about':
      path = `${base}/about`;
      break;
    case 'contact':
      path = `${base}/contact`;
      break;
    default:
      path = `${base}/`;
  }

  if (view === 'home' && sectionId) {
    return `${path}#${sectionId}`;
  }

  return path;
}
