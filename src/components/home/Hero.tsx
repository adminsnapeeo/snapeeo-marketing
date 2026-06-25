import { ArrowRight, ChevronDown } from 'lucide-react';
import { IMAGE_DIR } from '../../config/images';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

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
            <span className="section-pill-light mb-5 inline-flex">
              Jaipur&apos;s photography marketplace · Pre-launch
            </span>
            <h1 className="color-heading text-4xl font-bold leading-[1.15] md:text-5xl lg:text-[3.25rem]">
              Find. Book.{' '}
              <span className="text-highlight">Shoot.</span>{' '}
              Receive.
            </h1>
            <p className="color-muted mx-auto mt-5 max-w-md text-base leading-relaxed md:text-lg lg:mx-0">
              Snapeeo connects customers with local photographers — like Uber for rides,
              but for photography. Browse, book instantly, and get your photos in the app.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToHowItWorks}>
                Find a photographer
                <ChevronDown className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToPhotographers}>
                Join as photographer
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-in relative z-[1] flex justify-center lg:justify-end">
            <div className="camera-frame w-full max-w-[320px] md:max-w-[360px]">
              <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem]">
                <ResponsiveImage
                  src={heroPortraitImage}
                  alt="Jaipur photographer on the Snapeeo marketplace"
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
