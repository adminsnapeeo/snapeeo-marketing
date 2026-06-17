import { Apple, Play } from 'lucide-react';

interface AppStoreBadgesProps {
  size?: 'sm' | 'md';
  className?: string;
  light?: boolean;
}

export function AppStoreBadges({ size = 'md', className = '', light = false }: AppStoreBadgesProps) {
  const sizeClasses = size === 'sm' ? 'h-10 px-3.5 text-xs gap-2' : 'h-12 px-5 text-sm gap-2.5';
  const baseClasses = light
    ? 'border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25'
    : 'border-gray-100 bg-white text-ink shadow-card hover:border-brand-pink/30 hover:shadow-card-hover';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#"
        aria-label="Download on the App Store"
        className={`inline-flex items-center rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${sizeClasses} ${baseClasses}`}
      >
        <Apple className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
        <div className="flex flex-col leading-tight">
          <span className={`text-[10px] ${light ? 'text-white/75' : 'text-ink-muted'}`}>Download on the</span>
          <span className={`font-bold ${light ? 'text-white' : 'text-highlight'}`}>App Store</span>
        </div>
      </a>
      <a
        href="#"
        aria-label="Get it on Google Play"
        className={`inline-flex items-center rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${sizeClasses} ${baseClasses}`}
      >
        <Play className={size === 'sm' ? 'h-4 w-4 fill-current' : 'h-5 w-5 fill-current'} />
        <div className="flex flex-col leading-tight">
          <span className={`text-[10px] ${light ? 'text-white/75' : 'text-ink-muted'}`}>Get it on</span>
          <span className={`font-bold ${light ? 'text-white' : 'text-highlight'}`}>Google Play</span>
        </div>
      </a>
    </div>
  );
}
