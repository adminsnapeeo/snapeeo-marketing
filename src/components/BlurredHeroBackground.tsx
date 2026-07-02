const DEFAULT_HERO =
  'https://images.unsplash.com/photo-1493863641943-9b67198f0b4c?auto=format&fit=crop&w=1920&q=80'

const overlayClasses = {
  light: 'from-black/40 via-black/50 to-black/60',
  medium: 'from-black/50 via-black/55 to-black/65',
  heavy: 'from-black/55 via-black/60 to-black/70',
} as const

export type OverlayStrength = keyof typeof overlayClasses

interface BlurredHeroBackgroundProps {
  overlayStrength?: OverlayStrength
}

export function BlurredHeroBackground({
  overlayStrength = 'medium',
}: BlurredHeroBackgroundProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface-dark"
      aria-hidden="true"
    >
      <img
        src="/images/auth-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        style={{ filter: 'blur(24px)' }}
        onError={(event) => {
          const target = event.currentTarget
          if (target.src !== DEFAULT_HERO) {
            target.src = DEFAULT_HERO
          }
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlayStrength]}`}
      />
    </div>
  )
}
