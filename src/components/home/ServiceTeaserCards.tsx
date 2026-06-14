import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { serviceTeasers } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';

export function ServiceTeaserCards() {
  const { goToService } = useApp();

  return (
    <section className="mx-auto max-w-content px-4 py-16 md:px-8 lg:px-12">
      <SectionHeading
        title="Explore Our Services"
        subtitle="Tap a category to discover our full portfolio of professional photography offerings."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {serviceTeasers.map((teaser) => (
          <button
            key={teaser.id}
            type="button"
            onClick={() => goToService(teaser.id === 'portrait' ? 'fashion' : teaser.id)}
            className="group relative overflow-hidden rounded-lg glass glass-hover text-left"
          >
            <ResponsiveImage
              src={teaser.image}
              alt={teaser.label}
              variant="teaser"
              imgClassName="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
              <span className="font-serif text-lg font-semibold text-pearl md:text-xl">
                {teaser.label}
              </span>
              <ArrowRight className="h-5 w-5 text-amber-gold transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
