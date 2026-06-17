interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  badge?: string;
  highlight?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  badge,
  highlight,
  light = false,
}: SectionHeadingProps) {
  const titleParts = highlight && title.includes(highlight)
    ? title.split(highlight)
    : null;

  return (
    <div
      className={`mb-10 md:mb-12 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : ''}`}
    >
      {badge && (
        <span className={`mb-4 inline-flex ${light ? 'section-pill-on-pink' : 'section-pill-light'}`}>
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'color-heading'
        }`}
      >
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className={light ? 'text-white/90 underline decoration-white/40 decoration-4 underline-offset-4' : 'text-highlight'}>
              {highlight}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {align === 'center' && !light && <div className="heading-rule" />}
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? 'text-white/90' : 'color-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
