import { heroFeatures } from '../../data/content';

export function FeatureBar() {
  return (
    <section className="feature-strip section-light" aria-label="Why choose Snapeeo">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div className="feature-strip-inner">
          <div className="mb-8 text-center md:mb-10">
            <span className="section-pill-light mb-3 inline-flex">Why Snapeeo</span>
            <p className="color-heading mx-auto max-w-lg text-lg font-semibold md:text-xl">
              Everything you need to capture life&apos;s best moments
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.id}
                  className="feature-card group"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="feature-card-accent" aria-hidden="true" />
                  <div className="feature-card-body">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="feature-icon-wrap">
                        <Icon className="h-6 w-6" strokeWidth={2.25} />
                      </div>
                      <span className="feature-index">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="color-heading text-lg font-bold leading-snug md:text-xl">
                      {feature.title}
                    </h3>
                    <p className="color-muted mt-2.5 text-sm leading-relaxed md:text-[0.9375rem]">
                      {feature.description}
                    </p>
                    <div className="feature-stat mt-5 inline-flex items-center gap-2">
                      <span className="feature-stat-dot" aria-hidden="true" />
                      <span>{feature.stat}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
