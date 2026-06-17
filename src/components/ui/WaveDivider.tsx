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
        className="block h-12 w-full md:h-16 lg:h-20"
      >
        <path
          fill={fill}
          d="M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
