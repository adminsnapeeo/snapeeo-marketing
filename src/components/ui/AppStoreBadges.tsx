import { Apple, Play } from 'lucide-react';

interface AppStoreBadgesProps {
  size?: 'sm' | 'md';
  className?: string;
  light?: boolean;
}

export function AppStoreBadges({ size = 'md', className = '', light = false }: AppStoreBadgesProps) {
  const sizeClasses = size === 'sm' ? 'h-9 px-3 text-xs gap-1.5' : 'h-11 px-4 text-sm gap-2';
  const baseClasses = light
    ? 'border-white/25 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 hover:shadow-glow-sm'
    : 'border-white/12 bg-elevated text-ink hover:border-brand-pink/45 hover:bg-accent hover:shadow-glow-sm active:scale-[0.97]';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#"
        aria-label="Download on the App Store"
        className={`inline-flex items-center rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] ${sizeClasses} ${baseClasses}`}
      >
        <Apple className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
        <div className="flex flex-col leading-tight">
          <span className={`text-[10px] ${light ? 'text-white/70' : 'text-ink-muted'}`}>Download on the</span>
          <span className="font-semibold">App Store</span>
        </div>
      </a>
      <a
        href="#"
        aria-label="Get it on Google Play"
        className={`inline-flex items-center rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] ${sizeClasses} ${baseClasses}`}
      >
        <Play className={size === 'sm' ? 'h-4 w-4 fill-current' : 'h-5 w-5 fill-current'} />
        <div className="flex flex-col leading-tight">
          <span className={`text-[10px] ${light ? 'text-white/70' : 'text-ink-muted'}`}>Get it on</span>
          <span className="font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  );
}
