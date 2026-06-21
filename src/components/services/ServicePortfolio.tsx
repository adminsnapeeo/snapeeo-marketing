import { ArrowLeft, ArrowRight, Camera, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  getServiceById,
  getServicePortfolio,
  services,
} from '../../data/content';
import { getServiceCoverFallbacks } from '../../config/images';
import type { ServicePortfolioItem } from '../../types';
import { Button } from '../ui/Button';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';

interface ServicePortfolioProps {
  serviceId: string;
}

/** Explicit grid placement per gallery slot (matches bento layout on md+). */
const portfolioTileClasses = [
  'col-span-2 row-span-2 min-h-[18rem] md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 md:min-h-[24rem]',
  'col-span-2 min-h-[12rem] md:col-span-2 md:col-start-1 md:row-start-3 md:min-h-[14rem]',
  'col-span-1 row-span-2 min-h-[16rem] md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1 md:min-h-[20rem]',
  'min-h-[12rem] md:col-start-3 md:row-start-3 md:min-h-[14rem]',
  'min-h-[12rem] md:col-start-1 md:row-start-4 md:min-h-[14rem]',
  'col-span-2 min-h-[12rem] md:col-span-2 md:col-start-1 md:row-start-5 md:min-h-[14rem]',
  'min-h-[12rem] md:col-start-3 md:row-start-4 md:row-span-2 md:min-h-[14rem]',
] as const;

function PortfolioTile({
  item,
  index,
  onOpen,
}: {
  item: ServicePortfolioItem;
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative overflow-hidden rounded-3xl surface-card surface-card-hover ${portfolioTileClasses[index]} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-4`}
    >
      <ResponsiveImage
        src={item.src}
        fallbackSrcs={item.fallbackSrcs}
        alt={item.alt}
        variant="gallery"
        fill
        imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/70 via-brand-pink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-pink">
          View full size
        </span>
        <p className="mt-2 text-sm font-medium text-white drop-shadow-sm">{item.alt}</p>
      </div>
      {item.layout === 'hero' && (
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-pink shadow-sm">
          Featured
        </span>
      )}
    </button>
  );
}

export function ServicePortfolio({ serviceId }: ServicePortfolioProps) {
  const { openLightbox, goToService, setActiveView } = useApp();
  const service = getServiceById(serviceId);
  const portfolio = getServicePortfolio(serviceId);

  if (!service) {
    return (
      <div className="section-page view-transition pb-16 pt-24 text-center">
        <p className="color-muted">Service not found.</p>
        <Button variant="ghost" onClick={() => setActiveView('services')} className="mt-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Button>
      </div>
    );
  }

  const Icon = service.icon;
  const otherServices = services.filter((item) => item.id !== serviceId);

  const openPortfolioLightbox = (index: number) => {
    openLightbox(index, 'portfolio');
  };

  return (
    <>
      <section className="relative min-h-[22rem] overflow-hidden md:min-h-[28rem]">
        <ResponsiveImage
          src={service.image}
          fallbackSrcs={getServiceCoverFallbacks(serviceId)}
          alt={service.title}
          variant="hero"
          fill
          loading="eager"
          imgClassName="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/40 via-transparent to-brand-pink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="relative mx-auto flex h-full min-h-[22rem] max-w-content flex-col justify-end px-4 pb-10 pt-24 md:min-h-[28rem] md:px-8 md:pb-14 lg:px-12">
          <Button
            variant="ghost"
            onClick={() => setActiveView('services')}
            className="mb-8 w-fit border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Button>

          <div className="flex flex-wrap items-end gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-lg md:h-16 md:w-16">
              <Icon className="h-7 w-7 text-brand-pink md:h-8 md:w-8" />
            </div>
            <div className="max-w-3xl">
              <span className="section-pill-on-pink mb-3 inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Portfolio
              </span>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                {service.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm md:text-sm">
              <Camera className="h-4 w-4" />
              {portfolio.length} curated shots
            </span>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm md:text-sm">
              Verified Snapeeo photographers
            </span>
          </div>
        </div>
      </section>

      <div className="section-page view-transition pb-16 md:pb-24">
        <section className="mx-auto max-w-content px-4 pt-12 md:px-8 md:pt-16 lg:px-12">
          <SectionHeading
            badge="Gallery"
            title={`${service.title.split(' ')[0]} Highlights`}
            highlight="Highlights"
            subtitle="Tap any photo to view it full-screen. Every image represents the quality and style you can expect when booking through Snapeeo."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-[repeat(5,minmax(0,auto))] md:gap-5 lg:gap-6">
            {portfolio.map((item, index) => (
              <PortfolioTile
                key={item.id}
                item={item}
                index={index}
                onOpen={openPortfolioLightbox}
              />
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-brand-pink/10 bg-gradient-to-br from-white via-brand-pink-muted/30 to-white p-8 text-center shadow-card md:p-12">
            <h3 className="color-heading text-2xl font-bold md:text-3xl">
              Love what you see?
            </h3>
            <p className="color-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed md:text-base">
              Book a verified Snapeeo photographer for your next {service.title.toLowerCase()} session — instant booking, in-app chat, and edited galleries delivered fast.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="primary" onClick={() => setActiveView('contact')}>
                Book This Service
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => setActiveView('services')}>
                Browse More Services
              </Button>
            </div>
          </div>

          {otherServices.length > 0 && (
            <div className="mt-14">
              <p className="color-muted mb-4 text-center text-sm font-medium uppercase tracking-wider">
                Explore other portfolios
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {otherServices.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToService(item.id)}
                    className="chip px-4 py-2 text-xs md:text-sm"
                  >
                    {item.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
