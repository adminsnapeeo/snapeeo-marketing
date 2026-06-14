import { useMemo, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { galleryItems } from '../../data/content';
import type { GalleryCategory } from '../../types';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';

const categories: GalleryCategory[] = ['All', 'Travel', 'Portraits', 'Commercial'];

export function FeaturedGallery() {
  const { openLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-base">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          badge="Portfolio"
          title="Featured Gallery"
          subtitle="Browse work from Snapeeo photographers — book the artist behind any shoot you love."
        />

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'chip chip-active' : 'chip'}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => {
            const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(globalIndex)}
                className="group block w-full overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink active:scale-[0.98]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-card transition-all duration-300 group-hover:border-brand-pink/40 group-hover:shadow-card-hover">
                  <ResponsiveImage
                    src={item.src}
                    alt={item.alt}
                    variant="gallery"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-pink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-brand-pink px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-glow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
