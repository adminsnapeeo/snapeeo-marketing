import type { InputHTMLAttributes, ReactNode } from 'react'
import { useId } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
  rightElement?: ReactNode
}

export function Input({
  label,
  error,
  hint,
  rightElement,
  id: externalId,
  className = '',
  ...props
}: InputProps) {
  const generatedId = useId()
  const id = externalId ?? generatedId
  const hasError = Boolean(error)

  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/90">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={[
            'w-full rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-base text-white placeholder:text-white/40',
            'transition-colors duration-200',
            'focus:border-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-pink/40',
            hasError ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30' : '',
            rightElement ? 'pr-12' : '',
            className,
          ].join(' ')}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">{rightElement}</div>
        )}
      </div>
      {hint && !hasError && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-white/50">
          {hint}
        </p>
      )}
      {hasError && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
