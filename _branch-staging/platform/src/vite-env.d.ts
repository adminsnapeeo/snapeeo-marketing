/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROOT_DOMAIN?: string
  readonly VITE_WEB_ORIGIN?: string
  readonly VITE_ADMIN_ORIGIN?: string
  readonly VITE_WEB_PORT?: string
  readonly VITE_ADMIN_PORT?: string
  readonly VITE_COOKIE_DOMAIN?: string
  readonly VITE_LOCAL_SUBDOMAIN_HOSTS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
