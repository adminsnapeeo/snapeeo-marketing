import { Star } from 'lucide-react';
import { onboardedPhotographers, trustBadges } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';

export function PhotographerOnBoard() {
  return (
    <section id="photographers-on-board" className="section-base-compact scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          title="Photographers already on board"
          subtitle="Verified profiles from early onboarded photographers in your city."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {onboardedPhotographers.map((photographer) => (
            <article
              key={photographer.id}
              className="trust-photographer-card surface-card surface-card-hover overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ResponsiveImage
                  src={photographer.photo}
                  fallbackSrcs={photographer.photoFallbacks}
                  alt={`${photographer.name} — ${photographer.specialty}`}
                  variant="service"
                  fill
                  imgClassName="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold text-brand-pink shadow-sm">
                  Verified
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="color-heading truncate font-bold">{photographer.name}</h4>
                  <div className="flex shrink-0 items-center gap-0.5">
                    <Star className="h-3.5 w-3.5 fill-brand-pink text-brand-pink" />
                    <span className="text-xs font-semibold text-brand-pink">{photographer.rating}</span>
                  </div>
                </div>
                <p className="color-muted mt-1 text-sm">{photographer.specialty}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {trustBadges.map((badge) => (
                    <span key={badge.id} className="trust-photographer-chip-light">
                      {badge.label.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
