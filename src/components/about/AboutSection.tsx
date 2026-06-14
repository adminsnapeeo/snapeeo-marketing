import { aboutImage, stats } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { SectionHeading } from '../ui/SectionHeading';
import { StatCard } from '../ui/StatCard';

export function AboutSection() {
  return (
    <section className="mx-auto max-w-content px-4 py-[2.4rem] md:px-8 md:py-[3.6rem] lg:px-12 view-transition">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading badge="Our mission" title="About Snapeeo" subtitle="" align="left" />
          <div className="space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              Snapeeo was built with one goal: make booking a professional photographer as
              easy as ordering a ride. No emails, no waiting — just instant confirmation
              and stunning results.
            </p>
            <p>
              Our app connects you with verified photographers in your city. See live
              availability, compare portfolios, book in seconds, and receive edited
              galleries delivered straight to your phone.
            </p>
            <p>
              From Jaipur to cities worldwide, Snapeeo is changing how people capture
              life&apos;s most important moments.
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-glow transition-all duration-500 hover:border-brand-pink/35 hover:shadow-glow">
          <ResponsiveImage src={aboutImage} alt="Professional photographer at work" variant="about" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-pink/5 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
