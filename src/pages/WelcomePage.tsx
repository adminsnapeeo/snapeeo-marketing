import { Link } from 'react-router-dom'
import { BlurredHeroBackground } from '../components/BlurredHeroBackground'
import { Button } from '../components/Button'

export function WelcomePage() {
  return (
    <div className="relative h-screen min-h-screen w-full overflow-hidden">
      <BlurredHeroBackground overlayStrength="medium" />

      <div className="relative flex h-full min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in mx-auto max-w-xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Snapeeo
            </h1>
            <p className="text-lg text-white/70 sm:text-xl">
              Book premium photographers instantly
            </p>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link to="/sign-up" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full min-w-[180px]">
                Sign Up
              </Button>
            </Link>
            <Link to="/sign-in" className="w-full sm:w-auto">
              <Button variant="outline-dark" className="w-full min-w-[180px]">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
