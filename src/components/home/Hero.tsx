import { ChevronDown } from 'lucide-react';
import { IMAGE_DIR } from '../../config/images';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

const heroPortraitImage = `${IMAGE_DIR}/photographer.png`;

export function Hero() {

  const scrollToGallery = () => {
    document.getElementById('gallery-strip')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section section-light">
      <div className="hero-content mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-slide-up text-center lg:text-left">
            <span className="section-pill-light mb-5 inline-flex">Book a Pro Photographer Instantly</span>
            <h1 className="color-heading text-4xl font-bold leading-[1.15] md:text-5xl lg:text-[3.25rem]">
              Creating{' '}
              <span className="text-highlight">memories!</span>
            </h1>
            <p className="color-muted mx-auto mt-5 max-w-md text-base leading-relaxed md:text-lg lg:mx-0">
              Skip the selfie stick. Skip asking strangers. Book instantly, get
              confirmed in seconds, and fill your gallery with memories you'll
              love
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToGallery}>
                Discover snaps
                <ChevronDown className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-in relative z-[1] flex justify-center lg:justify-end">
            <div className="camera-frame w-full max-w-[320px] md:max-w-[360px]">
              <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem]">
                <ResponsiveImage
                  src={heroPortraitImage}
                  alt="Professional photographer"
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