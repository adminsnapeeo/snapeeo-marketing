import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

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
      className={`group flex flex-col overflow-hidden rounded-lg glass transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-amber-gold/50 hover:shadow-lg hover:shadow-amber-gold/5 ${
        isFocused ? 'ring-2 ring-amber-gold/60 scale-[1.02]' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <ResponsiveImage
          src={service.image}
          alt={service.title}
          variant="service"
          imgClassName="transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`} />
        <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-obsidian/70 text-xs font-semibold text-amber-gold backdrop-blur-sm border border-amber-gold/30">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg border border-amber-gold/30 bg-obsidian/70 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-amber-gold/60">
          <Icon className="h-6 w-6 text-amber-gold" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-pearl md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted md:text-base">
          {service.description}
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => onViewPortfolio(service.id)}
          className="mt-6 w-full sm:w-auto"
        >
          View Portfolio
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </article>
  );
}
