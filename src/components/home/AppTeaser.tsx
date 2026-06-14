import { CalendarCheck, MessageCircle, Sparkles } from 'lucide-react';
import { appFeatures } from '../../data/content';
import { PhoneMockup } from './PhoneMockup';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  calendar: CalendarCheck,
  sparkles: Sparkles,
  message: MessageCircle,
};

export function AppTeaser() {
  return (
    <section id="app-features" className="section-base scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          badge="Why Snapeeo"
          title="Built for Instant Booking"
          subtitle="Everything you need to find, book, and receive professional photography — fast."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <PhoneMockup />

          <div className="space-y-4">
            {appFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              const colors = [
                'from-brand-navy-mid to-brand-navy-light',
                'from-brand-navy-light to-brand-pink',
                'from-brand-pink to-brand-pink-light',
              ];
              return (
                <div
                  key={feature.title}
                  className="card-dark card-interactive group flex gap-4 p-5"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i]} text-white shadow-glow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-brand-pink-light">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
