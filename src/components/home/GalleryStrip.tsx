import { useCallback, useEffect, useRef, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { galleryStripItems } from '../../config/images';
import type { GalleryStripItem } from '../../types';
import { WaveDivider } from '../ui/WaveDivider';

const AUTO_INTERVAL_MS = 3000;
const VISIBLE_COUNT = 5;
const tilts = ['-rotate-6', '-rotate-2', 'rotate-0', 'rotate-3', 'rotate-6'];
const offsets = ['translate-y-4', 'translate-y-0', '-translate-y-2', 'translate-y-2', 'translate-y-6'];

type PolaroidProps = {
  item: GalleryStripItem;
  layoutIndex: number;
  globalIndex: number;
  onOpen: (index: number) => void;
  snap?: boolean;
};

function PolaroidButton({ item, layoutIndex, globalIndex, onOpen, snap }: PolaroidProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(globalIndex)}
      className={`polaroid w-[10.8rem] shrink-0 transition-transform duration-500 hover:scale-105 hover:z-10 md:w-[13.2rem] lg:w-[15.6rem] ${tilts[layoutIndex]} ${offsets[layoutIndex]} ${snap ? 'snap-center' : ''}`}
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
}

export function GalleryStrip() {
  const { openLightbox } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const mobileIndexRef = useRef(0);
  const userInteracting = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();

  const openStripLightbox = useCallback(
    (index: number) => openLightbox(index, 'strip'),
    [openLightbox],
  );

  const scrollToMobileIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    if (!child) return;
    const scrollLeft = child.offsetLeft - (container.clientWidth - child.offsetWidth) / 2;
    container.scrollTo({ left: scrollLeft, behavior });
  }, []);

  useEffect(() => {
    if (galleryStripItems.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      if (userInteracting.current) return;

      setStartIndex((prev) => (prev + 1) % galleryStripItems.length);
      const next = (mobileIndexRef.current + 1) % galleryStripItems.length;
      mobileIndexRef.current = next;
      scrollToMobileIndex(next);
    }, AUTO_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [scrollToMobileIndex]);

  const pauseAutoPlay = () => {
    userInteracting.current = true;
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      userInteracting.current = false;
    }, AUTO_INTERVAL_MS * 2);
  };

  const handleMobileScroll = () => {
    pauseAutoPlay();

    const container = scrollRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const childCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    mobileIndexRef.current = closest;
  };

  const desktopItems = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const globalIndex = (startIndex + i) % galleryStripItems.length;
    return {
      item: galleryStripItems[globalIndex],
      layoutIndex: i,
      globalIndex,
    };
  });

  if (galleryStripItems.length === 0) return null;

  return (
    <section id="gallery-strip" className="section-light relative pb-0 pt-4">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div
          ref={scrollRef}
          onScroll={handleMobileScroll}
          onTouchStart={pauseAutoPlay}
          className="gallery-strip-scroll flex items-end justify-start gap-3 overflow-x-auto pb-12 pt-4 md:hidden md:gap-5 lg:gap-6"
          aria-label="Gallery carousel"
        >
          {galleryStripItems.map((item, index) => (
            <PolaroidButton
              key={item.id}
              item={item}
              layoutIndex={index % VISIBLE_COUNT}
              globalIndex={index}
              onOpen={openStripLightbox}
              snap
            />
          ))}
        </div>

        <div className="hidden items-end justify-center gap-3 overflow-x-hidden pb-12 pt-4 md:flex md:gap-5 md:pb-20 lg:gap-6">
          {desktopItems.map(({ item, layoutIndex, globalIndex }) => (
            <PolaroidButton
              key={`${startIndex}-${item.id}`}
              item={item}
              layoutIndex={layoutIndex}
              globalIndex={globalIndex}
              onOpen={openStripLightbox}
            />
          ))}
        </div>
      </div>

      <div className="relative -mb-px">
        <WaveDivider fill="#E94E89" />
      </div>
    </section>
  );
}
