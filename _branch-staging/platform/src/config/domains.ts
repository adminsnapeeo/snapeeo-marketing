export type AppName = 'web' | 'admin'

export const SUBDOMAINS: Record<AppName, string> = {
  web: 'app',
  admin: 'admin',
}

const DEFAULT_PORTS: Record<AppName, number> = {
  web: 5174,
  admin: 5175,
}

export function isLocalRootDomain(rootDomain: string): boolean {
  return rootDomain === 'localhost' || rootDomain.endsWith('.localhost')
}

export function buildOrigin(
  rootDomain: string,
  subdomain: string,
  port?: number,
): string {
  const isLocal = isLocalRootDomain(rootDomain)

  if (isLocal) {
    const localPort = port ?? 5174
    const useSubdomainHosts = import.meta.env.VITE_LOCAL_SUBDOMAIN_HOSTS === 'true'
    const host = useSubdomainHosts ? `${subdomain}.localhost` : 'localhost'
    return `http://${host}:${localPort}`
  }

  return `https://${subdomain}.${rootDomain}`
}

export function getDefaultPort(app: AppName): number {
  return DEFAULT_PORTS[app]
}

export function getCookieDomain(rootDomain: string): string | undefined {
  if (isLocalRootDomain(rootDomain)) return undefined
  const normalized = rootDomain.replace(/^\./, '')
  return `.${normalized}`
}
