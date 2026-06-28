import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getServiceCardImageFallbacks, getServiceCardImageUrl } from '../../config/images';
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
          title="Book by shoot type"
          subtitle="Browse the kinds of sessions available on Snapeeo — each booked through independent photographers on the platform."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {preview.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => goToService(service.id)}
                className="surface-card surface-card-hover group flex w-full flex-col overflow-hidden text-left transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="service-image-frame">
                  <ResponsiveImage
                    src={getServiceCardImageUrl(service.id)}
                    fallbackSrcs={getServiceCardImageFallbacks(service.id)}
                    alt={service.title}
                    variant="service"
                    fill
                    imgClassName="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-pink shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="color-heading font-bold">{service.title}</h3>
                  <p className="color-muted mt-1 line-clamp-2 text-xs">{service.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button onClick={() => setActiveView('services')}>
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
