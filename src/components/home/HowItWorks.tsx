import { howItWorksSteps } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-base scroll-mt-24 pt-16 pb-8 md:pt-20 md:pb-12 lg:pb-14">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          light
          title="How it works"
          subtitle="From search to stunning photos — four simple steps. Book verified photographers in under 60 seconds and receive edited galleries straight to your phone."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item) => (
            <div key={item.step} className="card-on-pink p-6 text-center md:p-7">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-pink">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
