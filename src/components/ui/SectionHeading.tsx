interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  badge?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-5 md:mb-6 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : ''}`}
    >
      {badge && <span className="section-pill mb-3">{badge}</span>}
      <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base leading-relaxed text-ink-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
