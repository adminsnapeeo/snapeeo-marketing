import { Zap } from 'lucide-react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { HeroCarousel } from './HeroCarousel';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-pink/6 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-navy-light/15 blur-3xl" />

      <div className="relative mx-auto max-w-content px-4 pb-6 pt-8 md:px-8 md:pb-8 md:pt-10 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="animate-slide-up">
            <span className="section-pill mb-4">
              <Zap className="h-3.5 w-3.5 text-brand-pink-light" />
              Book in 60 seconds
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
              Book a Pro Photographer{' '}
              <span className="gradient-text">Instantly.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              Snapeeo connects you with verified photographers near you — real-time
              availability, instant confirmation, and stunning photos delivered to your phone.
            </p>

            <div className="mt-6">
              <AppStoreBadges />
            </div>
          </div>

          <div className="animate-fade-in">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
