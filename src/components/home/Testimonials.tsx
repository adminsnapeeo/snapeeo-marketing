import { Star } from 'lucide-react';
import { testimonials } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  return (
    <section className="section-base-tight-compact">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          light
          title="Loved by Thousands"
          subtitle="See why people choose Snapeeo for instant, hassle-free photography booking."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card-on-pink p-6 md:p-7">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/90 md:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 border-t border-white/15 pt-4">
                <p className="font-bold text-white">{t.name}</p>
                <p className="mt-0.5 text-xs text-white/70">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
