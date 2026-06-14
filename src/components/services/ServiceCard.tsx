import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import { Button } from '../ui/Button';
import { ResponsiveImage } from '../ui/ResponsiveImage';

interface ServiceCardProps {
  service: Service;
  index: number;
  isFocused?: boolean;
  onViewPortfolio: (serviceId: string) => void;
}

export function ServiceCard({
  service,
  index,
  isFocused = false,
  onViewPortfolio,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={`service-${service.id}`}
      className={`card-dark group flex flex-col overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-card-hover ${
        isFocused ? 'border-brand-pink/50 shadow-glow ring-2 ring-brand-pink/40 -translate-y-1' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <ResponsiveImage
          src={service.image}
          alt={service.title}
          variant="service"
          imgClassName="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-pink/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-brand-pink/30 bg-elevated/90 text-xs font-bold text-brand-pink-light shadow-glow-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="icon-badge absolute bottom-4 right-4 h-12 w-12 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-brand-pink-light md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted md:text-base">
          {service.description}
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => onViewPortfolio(service.id)}
          className="mt-6 w-full sm:w-auto"
        >
          View Portfolio
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
