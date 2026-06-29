import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { services } from '../../data/content';
import { PageHero } from '../ui/PageHero';
import { Button } from '../ui/Button';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  showBackLink?: boolean;
}

export function ServicesGrid({ showBackLink = true }: ServicesGridProps) {
  const { goToService, setActiveView } = useApp();

  return (
    <>
      <PageHero
        badge="On the platform"
        title="Shoot types you can book"
        subtitle="Every category below connects you with independent photographers in your city — browse portfolios and book through Snapeeo."
      />

      <div className="section-page view-transition pb-16 md:pb-24">
        <section className="mx-auto w-full min-w-0 max-w-content px-4 pt-10 md:px-8 md:pt-12 lg:px-12">
          <div className="mb-8 grid min-w-0 grid-cols-3 gap-1.5 sm:mb-10 sm:gap-2 md:flex md:flex-wrap md:justify-center md:gap-3">
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => goToService(service.id)}
                className="chip flex w-full min-w-0 items-center justify-start gap-1 px-2 py-1.5 text-[11px] leading-tight sm:px-2.5 sm:text-xs md:w-auto md:justify-center md:gap-0 md:px-4 md:py-1.5 md:text-sm"
              >
                <span className="w-6 shrink-0 tabular-nums text-left md:w-auto">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span className="min-w-0 truncate md:truncate-none">
                  {service.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          <div className="services-grid items-stretch">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
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
