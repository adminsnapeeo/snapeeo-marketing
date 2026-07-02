import {
  buildOrigin,
  getCookieDomain,
  getDefaultPort,
  isLocalRootDomain,
  SUBDOMAINS,
  type AppName,
} from './domains'

export interface AppEnv {
  app: AppName
  origin: string
  webOrigin: string
  adminOrigin: string
  rootDomain: string
  isLocal: boolean
  cookieDomain: string | undefined
}

function readPort(value: string | undefined, fallback: number): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

export function createAppEnv(app: AppName): AppEnv {
  const rootDomain = import.meta.env.VITE_ROOT_DOMAIN ?? 'localhost'
  const isLocal = isLocalRootDomain(rootDomain)

  const webPort = readPort(import.meta.env.VITE_WEB_PORT, getDefaultPort('web'))
  const adminPort = readPort(import.meta.env.VITE_ADMIN_PORT, getDefaultPort('admin'))

  const webOrigin =
    import.meta.env.VITE_WEB_ORIGIN ??
    buildOrigin(rootDomain, SUBDOMAINS.web, isLocal ? webPort : undefined)

  const adminOrigin =
    import.meta.env.VITE_ADMIN_ORIGIN ??
    buildOrigin(rootDomain, SUBDOMAINS.admin, isLocal ? adminPort : undefined)

  const origin = app === 'web' ? webOrigin : adminOrigin

  const cookieDomain =
    import.meta.env.VITE_COOKIE_DOMAIN ?? getCookieDomain(rootDomain)

  return {
    app,
    origin,
    webOrigin,
    adminOrigin,
    rootDomain,
    isLocal,
    cookieDomain,
  }
}
