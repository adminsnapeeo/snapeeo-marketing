import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { heroImages } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';

interface HeroCarouselProps {
  circular?: boolean;
}

export function HeroCarousel({ circular = false }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length);
  const next = () => setCurrent((c) => (c + 1) % heroImages.length);

  const frameClass = circular
    ? 'h-full w-full rounded-full'
    : 'video-frame aspect-[4/3] md:aspect-[16/10]';

  return (
    <div className={`group relative ${circular ? 'h-full w-full' : 'w-full'}`}>
      <div className={`relative overflow-hidden bg-white ${frameClass}`}>
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ResponsiveImage
              src={src}
              alt={`Featured photography ${i + 1}`}
              variant="hero"
              fill
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-pink shadow-float opacity-0 transition-all duration-300 hover:scale-110 group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-pink shadow-float opacity-0 transition-all duration-300 hover:scale-110 group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'h-2.5 w-8 bg-white shadow-sm'
                  : 'h-2.5 w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
