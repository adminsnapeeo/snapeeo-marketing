import { useApp } from '../../context/AppContext';
import { galleryItems } from '../../data/content';
import { WaveDivider } from '../ui/WaveDivider';

const tilts = ['-rotate-6', '-rotate-2', 'rotate-0', 'rotate-3', 'rotate-6'];
const offsets = ['translate-y-4', 'translate-y-0', '-translate-y-2', 'translate-y-2', 'translate-y-6'];

export function GalleryStrip() {
  const { openLightbox } = useApp();
  const strip = galleryItems.slice(0, 5);

  return (
    <section id="gallery-strip" className="section-light relative pb-0 pt-4">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div className="flex items-end justify-center gap-3 overflow-x-hidden pb-16 pt-4 md:gap-5 md:pb-24 lg:gap-6">
          {strip.map((item, index) => {
            const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(globalIndex)}
                className={`polaroid w-36 shrink-0 transition-transform duration-500 hover:scale-105 hover:z-10 md:w-44 lg:w-52 ${tilts[index]} ${offsets[index]}`}
              >
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative -mb-px">
        <WaveDivider fill="#E94E89" />
      </div>
    </section>
  );
}
