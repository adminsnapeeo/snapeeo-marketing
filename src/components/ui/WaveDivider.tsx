interface WaveDividerProps {
  /** Color of the wave fill (the section below the divider) */
  fill?: string;
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ fill = '#FFFFFF', className = '', flip = false }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-14 w-full md:h-20 lg:h-24"
      >
        <path
          fill={fill}
          d="M0,52 C120,8 240,92 360,52 C480,8 600,92 720,52 C840,8 960,92 1080,52 C1200,8 1320,92 1440,52 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
