import { useMemo, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { galleryItems } from '../../data/content';
import type { GalleryCategory } from '../../types';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';

const categories: GalleryCategory[] = ['All', 'Travel', 'Portraits', 'Commercial'];

const circleColors = ['bg-brand-pink', 'bg-brand-teal', 'bg-yellow-400', 'bg-brand-pink-light'];

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
          highlight="Gallery"
          subtitle="Browse work from Snapeeo photographers — book the artist behind any shoot you love."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
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

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
          {filtered.map((item, index) => {
            const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
            const bgColor = circleColors[index % circleColors.length];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(globalIndex)}
                className="group flex flex-col items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-4"
              >
                <div
                  className={`circle-image relative h-40 w-40 transition-all duration-500 group-hover:scale-105 md:h-48 md:w-48 lg:h-52 lg:w-52 ${bgColor} p-2`}
                >
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <ResponsiveImage
                      src={item.src}
                      alt={item.alt}
                      variant="gallery"
                      imgClassName="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <span className="rounded-full bg-brand-pink-muted px-4 py-1 text-xs font-semibold text-highlight opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
