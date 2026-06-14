import { useApp } from '../../context/AppContext';
import { services } from '../../data/content';
import { useFocusService } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  onFocusComplete: () => void;
  showBackLink?: boolean;
}

export function ServicesGrid({ onFocusComplete, showBackLink = true }: ServicesGridProps) {
  const { focusedServiceId, goToService, setActiveView } = useApp();

  useFocusService(focusedServiceId, onFocusComplete);

  return (
    <section className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24 lg:px-12 view-transition">
      <SectionHeading
        title="Our Services"
        subtitle="Ten professional photography specialties — each delivered by verified Snappio photographers with portfolio-grade results."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {services.map((service, i) => (
          <button
            key={service.id}
            type="button"
            onClick={() => goToService(service.id)}
            className="rounded-full border border-slate-700 bg-slate-900/40 px-4 py-1.5 text-xs font-medium text-slate-muted transition-all duration-300 hover:border-amber-gold/50 hover:text-pearl md:text-sm"
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
          <button
            type="button"
            onClick={() => setActiveView('home')}
            className="text-sm text-slate-muted transition-colors duration-300 hover:text-amber-gold"
          >
            ← Back to Home
          </button>
        </div>
      )}
    </section>
  );
}
