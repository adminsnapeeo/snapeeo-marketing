import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variants = {
  primary:
    'border-2 border-brand-pink/70 bg-gradient-brand text-white shadow-glow-sm hover:border-brand-pink-light hover:bg-gradient-brand-hover hover:shadow-glow active:scale-[0.97] active:shadow-glow-sm',
  secondary:
    'bg-brand-pink text-white shadow-glow-sm hover:bg-brand-pink-light hover:shadow-glow active:scale-[0.97]',
  ghost:
    'bg-transparent text-ink hover:bg-white/8 hover:text-brand-pink-light active:bg-white/12 active:scale-[0.97]',
  outline:
    'border-2 border-brand-pink/70 bg-transparent text-brand-pink-light hover:bg-brand-pink hover:border-brand-pink hover:text-white hover:shadow-glow-sm active:scale-[0.97]',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
