import { howItWorksSteps } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-base section-alt scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          badge="Simple process"
          title="How Instant Booking Works"
          subtitle="From search to stunning photos — four steps, zero waiting."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item) => (
            <div
              key={item.step}
              className="card-dark card-interactive group p-6"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-sm font-bold text-white shadow-glow-sm transition-all duration-300 group-hover:shadow-glow group-hover:scale-110`}
              >
                {item.step}
              </div>
              <h3 className="font-serif text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-brand-pink-light">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
