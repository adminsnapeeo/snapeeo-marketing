import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthCard, AuthLayout } from '../components/AuthLayout'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { PasswordToggle } from '../components/PasswordToggle'
import { isValidEmail } from '../utils/validation'

interface FormErrors {
  email?: string
  password?: string
}

export function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  function validate(): FormErrors {
    const next: FormErrors = {}
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      next.email = 'Email is required'
    } else if (!isValidEmail(trimmedEmail)) {
      next.email = 'Enter a valid email address'
    }

    if (!password) {
      next.password = 'Password is required'
    } else if (password.length < 8) {
      next.password = 'Password must be at least 8 characters'
    }

    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    console.log('Sign in attempt:', { email: email.trim(), password })
    alert('Sign in — API not connected yet')
  }

  return (
    <AuthLayout overlayStrength="heavy">
      <AuthCard>
        <Link
          to="/"
          className="mb-6 inline-flex items-center text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
        >
          ← Back
        </Link>

        <div className="mb-8 space-y-2">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Welcome back</h1>
          <p className="text-white/60">Sign in to manage your bookings</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <Input
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="current-password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={errors.password}
            placeholder="••••••••"
            rightElement={
              <PasswordToggle
                visible={showPassword}
                onToggle={() => setShowPassword((prev) => !prev)}
                label="password"
              />
            }
          />

          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-brand-teal-muted transition-colors hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
            >
              Forgot password?
            </a>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Don&apos;t have an account?{' '}
          <Link
            to="/sign-up"
            className="font-semibold text-brand-pink transition-colors hover:text-brand-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
          >
            Sign up
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  )
}
