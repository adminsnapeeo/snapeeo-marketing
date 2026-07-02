import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthCard, AuthLayout } from '../components/AuthLayout'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { PasswordToggle } from '../components/PasswordToggle'
import { isValidEmail, isValidIndianPhone } from '../utils/validation'

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  password?: string
  confirmPassword?: string
  terms?: string
}

export function SignUpPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  function validate(): FormErrors {
    const next: FormErrors = {}
    const trimmedName = fullName.trim()
    const trimmedEmail = email.trim()
    const trimmedPhone = phone.trim()

    if (!trimmedName) {
      next.fullName = 'Full name is required'
    } else if (trimmedName.length < 2) {
      next.fullName = 'Name must be at least 2 characters'
    }

    if (!trimmedEmail) {
      next.email = 'Email is required'
    } else if (!isValidEmail(trimmedEmail)) {
      next.email = 'Enter a valid email address'
    }

    if (!isValidIndianPhone(trimmedPhone)) {
      next.phone = 'Enter a valid Indian phone number (e.g. +91 9876543210)'
    }

    if (!password) {
      next.password = 'Password is required'
    } else if (password.length < 8) {
      next.password = 'Password must be at least 8 characters'
    }

    if (!confirmPassword) {
      next.confirmPassword = 'Please confirm your password'
    } else if (confirmPassword !== password) {
      next.confirmPassword = 'Passwords do not match'
    }

    if (!termsAccepted) {
      next.terms = 'You must agree to the Terms of Service and Privacy Policy'
    }

    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    console.log('Sign up attempt:', {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      role: 'customer',
    })
    alert('Account created — API not connected yet')
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
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Create your account</h1>
          <p className="text-white/60">Join Snapeeo to book photographers near you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <Input
            label="Full name"
            type="text"
            name="fullName"
            autoComplete="name"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            error={errors.fullName}
            placeholder="Your name"
          />

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
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            error={errors.phone}
            hint="Optional — Indian format, e.g. +91 9876543210"
            placeholder="+91 9876543210"
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="new-password"
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

          <Input
            label="Confirm password"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            error={errors.confirmPassword}
            placeholder="••••••••"
            rightElement={
              <PasswordToggle
                visible={showConfirmPassword}
                onToggle={() => setShowConfirmPassword((prev) => !prev)}
                label="confirm password"
              />
            }
          />

          <div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-white/80">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 rounded border-white/20 bg-surface-elevated text-brand-pink focus:ring-brand-pink"
                aria-invalid={Boolean(errors.terms)}
              />
              <span>
                I agree to the{' '}
                <a href="#" className="text-brand-teal-muted hover:text-brand-teal">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-brand-teal-muted hover:text-brand-teal">
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.terms && (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.terms}
              </p>
            )}
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{' '}
          <Link
            to="/sign-in"
            className="font-semibold text-brand-pink transition-colors hover:text-brand-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
          >
            Sign in
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  )
}
