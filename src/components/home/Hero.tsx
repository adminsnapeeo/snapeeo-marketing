import { ArrowRight, ChevronDown } from 'lucide-react';
import { IMAGE_DIR } from '../../config/images';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';
import { TypewriterText } from '../ui/TypewriterText';

const heroPortraitImage = `${IMAGE_DIR}/photographer.png`;

export function Hero() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPhotographers = () => {
    document.getElementById('for-photographers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section section-light">
      <div className="hero-content mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-slide-up text-center lg:text-left">
            <span className="section-pill-light mb-5 inline-block max-w-full text-pretty leading-snug">
              <TypewriterText text="Your city's photography marketplace · Pre-launch" />
            </span>
            <h1 className="color-heading text-balance text-4xl font-bold leading-[1.15] md:text-5xl lg:text-[3.25rem]">
              Find. Book.{' '}
              <span className="text-highlight">Shoot.</span>{' '}
              Receive.
            </h1>
            <p className="color-muted mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed md:text-lg lg:mx-0 lg:max-w-none">
            Need a photographer? Snapeeo helps you discover and book trusted local photographers in minutes. Browse portfolios, book instantly, and receive your photos directly in the app.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:flex-col lg:items-stretch lg:justify-start xl:flex-row xl:flex-wrap xl:items-center">
              <Button size="lg" className="w-full sm:w-auto" onClick={scrollToHowItWorks}>
                Find a photographer
                <ChevronDown className="h-5 w-5 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={scrollToPhotographers}
              >
                Join as a photographer
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-in relative z-[1] flex justify-center lg:justify-end">
            <div className="camera-frame w-full max-w-[320px] md:max-w-[360px]">
              <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem]">
                <ResponsiveImage
                  src={heroPortraitImage}
                  alt="Local photographer on the Snapeeo marketplace"
                  variant="hero"
                  fill
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
