import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline-dark' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  asChild?: false
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'gradient-brand text-white shadow-lg shadow-brand-pink/25 hover:shadow-brand-pink/40',
  'outline-dark':
    'border-2 border-white/70 bg-transparent text-white hover:bg-white/10',
  ghost: 'bg-transparent text-white/80 hover:bg-white/10 hover:text-white',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex min-h-11 items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
