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
    <section id="services-preview" className="section-base section-alt scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          badge="Also available"
          title="Photography Services"
          subtitle="Beyond instant booking — explore specialty shoots for every occasion."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => goToService(service.id)}
                className="card-dark card-interactive group overflow-hidden text-left"
              >
                <div className="relative">
                  <ResponsiveImage
                    src={service.image}
                    alt={service.title}
                    variant="gallery"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="icon-badge absolute bottom-3 right-3 h-9 w-9 rounded-lg group-hover:scale-110">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-brand-pink-light">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-ink-muted">{service.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" onClick={() => setActiveView('services')}>
            View All 9 Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
