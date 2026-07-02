import { SUBDOMAINS } from '../config/domains'
import { env } from '../config/env'

export function AdminHomePage() {
  const hostLabel = env.isLocal
    ? `localhost:${new URL(env.origin).port}`
    : `${SUBDOMAINS.admin}.${env.rootDomain}`

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel animate-fade-in w-full max-w-lg rounded-2xl p-8 text-center shadow-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-teal">
          Admin subdomain
        </p>
        <h1 className="mb-3 text-3xl font-bold text-white">Snapeeo Admin</h1>
        <p className="mb-6 text-white/60">
          Internal panel served from{' '}
          <code className="rounded bg-surface-elevated px-2 py-0.5 text-sm text-brand-teal-muted">
            {hostLabel}
          </code>
        </p>
        <p className="mb-8 text-sm text-white/50">
          Dashboard and management tools will live here — separate from the customer web app.
        </p>
        <a
          href={env.webOrigin}
          className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/30 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
        >
          Go to customer app →
        </a>
      </div>
    </div>
  )
}
