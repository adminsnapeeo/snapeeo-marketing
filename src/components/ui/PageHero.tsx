interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
}: PageHeroProps) {
  const centered = align === 'center';
  const titleParts = highlight && title.includes(highlight) ? title.split(highlight) : null;

  return (
    <div className="page-hero section-light">
      <div
        className={`relative mx-auto max-w-content px-4 py-12 md:px-8 md:py-14 lg:px-12 ${
          centered ? 'text-center' : 'text-left'
        }`}
      >
        {badge && (
          <span className="section-pill-light mb-4 inline-flex">{badge}</span>
        )}
        <h1 className="color-heading text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
          {titleParts ? (
            <>
              {titleParts[0]}
              <span className="text-highlight">{highlight}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {centered && <div className="heading-rule" />}
        {subtitle && (
          <p
            className={`color-muted mt-4 text-base leading-relaxed md:text-lg ${
              centered ? 'mx-auto max-w-2xl' : 'max-w-xl'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
