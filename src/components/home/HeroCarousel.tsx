import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { heroImages } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function HeroCarousel() {
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

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-glow aspect-[4/3] transition-all duration-500 hover:border-brand-pink/30 hover:shadow-glow md:aspect-[16/10]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-brand-pink/5" />
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="icon-badge absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="icon-badge absolute right-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 active:scale-95"
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
            className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              i === current
                ? 'w-6 bg-brand-pink shadow-glow-sm'
                : 'w-2 bg-white/30 hover:bg-brand-pink-light/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
