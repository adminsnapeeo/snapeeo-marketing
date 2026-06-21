import { ChevronDown } from 'lucide-react';
import { IMAGE_DIR } from '../../config/images';
import { Button } from '../ui/Button';

const heroCoverImage = `${IMAGE_DIR}/jaipur-hawa-mahal-cover.jpg`;

export function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery-strip')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section hero-cover">
      <img
        src={heroCoverImage}
        alt=""
        className="hero-cover-image"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-cover-overlay" aria-hidden="true" />
      <div className="hero-content mx-auto flex max-w-content items-center px-4 md:px-8 lg:px-12">
        <div className="animate-slide-up mx-auto max-w-2xl text-center">
          <span className="section-pill-on-pink mb-5 inline-flex">Book a Pro Photographer Instantly</span>
          <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-[3.25rem]">
            Moments{' '}
            <span className="text-highlight">captured!</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
            Skip the selfie stick. Skip asking strangers. Book instantly, get
            confirmed in seconds, and fill your gallery with memories you'll
            love
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" onClick={scrollToGallery}>
              Discover snaps
              <ChevronDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
