import { useApp } from '../../context/AppContext';
import { services } from '../../data/content';
import { useFocusService } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  onFocusComplete: () => void;
}

export function ServicesGrid({ onFocusComplete }: ServicesGridProps) {
  const { focusedServiceId, goToService, setActiveView } = useApp();

  useFocusService(focusedServiceId, onFocusComplete);

  return (
    <section className="mx-auto max-w-content px-4 py-[2.4rem] md:px-8 md:py-[3.6rem] lg:px-12 view-transition">
      <SectionHeading
        badge="Specialty shoots"
        title="Photography Services"
        subtitle="Need something specific? Browse our specialty services — or book any custom shoot instantly via the app."
      />

      <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
        {services.map((service, i) => (
          <button
            key={service.id}
            type="button"
            onClick={() => goToService(service.id)}
            className={
              focusedServiceId === service.id
                ? 'chip chip-active text-xs md:text-sm'
                : 'chip text-xs md:text-sm'
            }
          >
            {i + 1}. {service.title}
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

      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={() => setActiveView('home')}
          className="link-subtle"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}
