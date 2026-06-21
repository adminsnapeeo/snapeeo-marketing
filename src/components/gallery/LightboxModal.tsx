import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useMemo, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { galleryItems, getServicePortfolio } from '../../data/content';
import { galleryStripItems } from '../../config/images';
import { useLightboxKeyboard } from '../../hooks';
import { ResponsiveImage } from '../ui/ResponsiveImage';

const lightboxSources = {
  gallery: galleryItems,
  strip: galleryStripItems,
} as const;

export function LightboxModal() {
  const { lightbox, closeLightbox, setLightboxIndex, focusedServiceId } = useApp();
  const touchStartX = useRef(0);

  const items = useMemo(() => {
    if (lightbox.source === 'portfolio') {
      return focusedServiceId ? getServicePortfolio(focusedServiceId) : [];
    }
    return lightboxSources[lightbox.source];
  }, [lightbox.source, focusedServiceId]);

  const goPrev = useCallback(() => {
    setLightboxIndex(
      (lightbox.index - 1 + items.length) % items.length,
    );
  }, [lightbox.index, items.length, setLightboxIndex]);

  const goNext = useCallback(() => {
    setLightboxIndex((lightbox.index + 1) % items.length);
  }, [lightbox.index, items.length, setLightboxIndex]);

  useLightboxKeyboard(lightbox.open, closeLightbox, goPrev, goNext);

  if (!lightbox.open || items.length === 0) return null;

  const item = items[lightbox.index];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery lightbox"
      onClick={closeLightbox}
    >
      <button
        type="button"
        onClick={closeLightbox}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 z-10 rounded-full border border-brand-pink/15 bg-surface p-2 shadow-card transition-all duration-300 hover:scale-110 hover:border-brand-pink/35 md:right-8 md:top-8"
      >
        <X className="h-6 w-6 text-brand-pink-light" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-brand-pink/15 bg-surface p-3 shadow-card transition-all duration-300 hover:scale-110 hover:border-brand-pink/35 md:left-8"
      >
        <ChevronLeft className="h-6 w-6 text-brand-pink-light" />
      </button>

      <div
        className="relative mx-4 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ResponsiveImage
          src={item.src}
          alt={item.alt}
          variant="lightbox"
          className="mx-auto overflow-hidden rounded-2xl border border-brand-pink/15 shadow-card"
        />
        <p className="mt-4 text-center text-sm text-ink-muted">
          {lightbox.index + 1} / {items.length} — {item.alt}
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-brand-pink/15 bg-surface p-3 shadow-card transition-all duration-300 hover:scale-110 hover:border-brand-pink/35 md:right-8"
      >
        <ChevronRight className="h-6 w-6 text-brand-pink-light" />
      </button>
    </div>
  );
}
