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
    <section id="app-features" className="section-base-compact scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          light
          title="Built for the marketplace"
          subtitle="One app for customers and photographers — find talent, book instantly, and deliver photos seamlessly."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <PhoneMockup />
          </div>

          <div className="space-y-4">
            {appFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.title} className="card-on-pink flex gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{feature.description}</p>
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
