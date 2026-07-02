import type { ReactNode } from 'react'
import {
  BlurredHeroBackground,
  type OverlayStrength,
} from './BlurredHeroBackground'

interface AuthLayoutProps {
  children: ReactNode
  overlayStrength?: OverlayStrength
}

export function AuthLayout({
  children,
  overlayStrength = 'heavy',
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BlurredHeroBackground overlayStrength={overlayStrength} />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <div className="mx-auto w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}

interface AuthCardProps {
  children: ReactNode
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="glass-panel animate-fade-in rounded-2xl p-6 shadow-2xl sm:p-8">
      {children}
    </div>
  )
}
