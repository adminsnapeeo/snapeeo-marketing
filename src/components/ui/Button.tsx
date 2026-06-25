import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'outline-on-dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variants = {
  primary:
    'bg-brand-pink text-white shadow-glow-sm hover:bg-brand-pink-dark hover:shadow-glow hover:-translate-y-0.5 active:scale-[0.98]',
  secondary:
    'bg-brand-pink-light text-white shadow-card hover:bg-brand-pink hover:-translate-y-0.5 active:scale-[0.98]',
  white:
    'bg-white text-brand-pink shadow-float hover:bg-brand-pink-muted hover:-translate-y-0.5 active:scale-[0.98]',
  ghost:
    'bg-transparent text-ink-muted hover:bg-brand-pink-muted hover:text-brand-pink active:scale-[0.98]',
  outline:
    'border-2 border-brand-pink bg-transparent text-brand-pink hover:bg-brand-pink hover:text-white hover:-translate-y-0.5 active:scale-[0.98]',
  'outline-on-dark':
    'btn-outline-on-dark hover:-translate-y-0.5 active:scale-[0.98]',
};

const sizes = {
  sm: 'px-5 py-2.5 text-xs font-semibold',
  md: 'px-7 py-3 text-sm font-semibold',
  lg: 'px-9 py-4 text-base font-bold',
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
      className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
