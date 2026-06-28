import { ArrowRight } from 'lucide-react';
import { getServiceCardImageFallbacks, getServiceCardImageUrl } from '../../config/images';
import type { Service } from '../../types';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  service: Service;
  index: number;
  onViewPortfolio: (serviceId: string) => void;
}

export function ServiceCard({
  service,
  index,
  onViewPortfolio,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={`service-${service.id}`}
      className="service-card group surface-card surface-card-hover transition-all duration-300"
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
        <div
          className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-55`}
        />
        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#e94e89] shadow-sm sm:left-4 sm:top-4">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 shadow-sm transition-transform duration-300 group-hover:scale-110 sm:bottom-4 sm:right-4 sm:h-11 sm:w-11">
          <Icon className="h-5 w-5 text-[#e94e89]" />
        </div>
      </div>

      <div className="service-card-body">
        <h3 className="color-heading line-clamp-2 text-lg font-bold leading-snug sm:text-xl md:text-2xl">
          {service.title}
        </h3>
        <p className="color-muted mt-2 line-clamp-3 flex-1 text-sm leading-relaxed sm:mt-3 md:text-base">
          {service.description}
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => onViewPortfolio(service.id)}
          className="mt-4 w-full shrink-0 sm:mt-5"
        >
          View Portfolio
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </article>
  );
}
