import { Star } from 'lucide-react';
import { testimonials } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  return (
    <section className="section-base section-alt">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          badge="Real stories"
          title="Loved by Thousands"
          subtitle="See why people choose Snapeeo for instant, hassle-free photography booking."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="card-dark card-interactive p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-pink text-brand-pink drop-shadow-[0_0_6px_rgba(225,29,141,0.5)]" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink md:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-white/10 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-brand-pink-light/80">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
