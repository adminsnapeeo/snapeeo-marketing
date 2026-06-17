import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { services } from '../../data/content';
import { Button } from '../ui/Button';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';

export function ServicesPreview() {
  const { setActiveView, goToService } = useApp();
  const preview = services.slice(0, 4);

  return (
    <section id="services-preview" className="section-base-compact scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          light
          title="Photography Services"
          subtitle="Beyond instant booking — explore specialty shoots for every occasion."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => goToService(service.id)}
                className="card-on-pink group overflow-hidden text-left transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    src={service.image}
                    alt={service.title}
                    variant="gallery"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-pink">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white">{service.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-white/80">{service.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button variant="white" onClick={() => setActiveView('services')}>
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
