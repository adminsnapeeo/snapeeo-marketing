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
      className={`group surface-card surface-card-hover flex flex-col overflow-hidden transition-all duration-300 ${
        isFocused ? 'ring-2 ring-[#e94e89]/40 scale-[1.02]' : ''
      }`}
    >
      <div className="service-image-frame">
        <ResponsiveImage
          src={service.image}
          alt={service.title}
          variant="service"
          fill
          imgClassName="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-55`}
        />
        <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#e94e89] shadow-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 shadow-sm transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-[#e94e89]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="color-heading text-xl font-bold md:text-2xl">
          {service.title}
        </h3>
        <p className="color-muted mt-3 flex-1 text-sm leading-relaxed md:text-base">
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
