import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { services } from '../../data/content';
import { useFocusService } from '../../hooks';
import { PageHero } from '../ui/PageHero';
import { Button } from '../ui/Button';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  onFocusComplete: () => void;
  showBackLink?: boolean;
}

export function ServicesGrid({ onFocusComplete, showBackLink = true }: ServicesGridProps) {
  const { focusedServiceId, goToService, setActiveView } = useApp();

  useFocusService(focusedServiceId, onFocusComplete);

  return (
    <>
      <PageHero
        badge="What we offer"
        title="Our Services"
        subtitle="Ten professional photography specialties — each delivered by verified Snapeeo photographers with portfolio-grade results."
      />

      <div className="section-page view-transition pb-16 md:pb-24">
        <section className="mx-auto max-w-content px-4 pt-10 md:px-8 md:pt-12 lg:px-12">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => goToService(service.id)}
                className={`chip px-4 py-1.5 text-xs md:text-sm ${
                  focusedServiceId === service.id ? 'chip-active' : ''
                }`}
              >
                {String(i + 1).padStart(2, '0')}. {service.title.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isFocused={focusedServiceId === service.id}
                onViewPortfolio={goToService}
              />
            ))}
          </div>

          {showBackLink && (
            <div className="mt-12 text-center">
              <Button variant="ghost" onClick={() => setActiveView('home')}>
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
