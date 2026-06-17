import { aboutImage, stats } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { PageHero } from '../ui/PageHero';
import { StatCard } from '../ui/StatCard';

export function AboutSection() {
  return (
    <>
      <PageHero
        badge="Our mission"
        title="About Snapeeo"
        subtitle="Making professional photography as easy as ordering a ride — instant booking, verified artists, stunning results."
        align="left"
      />

      <section className="section-page view-transition">
        <div className="mx-auto max-w-content px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5">
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Snapeeo was built with one goal: make booking a professional photographer as
                easy as ordering a ride. No emails, no waiting — just instant confirmation
                and stunning results.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Our app connects you with verified photographers in your city. See live
                availability, compare portfolios, book in seconds, and receive edited
                galleries delivered straight to your phone.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                From Jaipur to cities worldwide, Snapeeo is changing how people capture
                life&apos;s most important moments.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-[rgba(233,78,137,0.12)] bg-white shadow-[0_24px_60px_-10px_rgba(233,78,137,0.15)] transition-all duration-500 hover:border-[rgba(233,78,137,0.25)]">
              <ResponsiveImage src={aboutImage} alt="Professional photographer at work" variant="about" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fce7f3]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <div className="stats-band py-12 md:py-16">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 md:px-8 lg:px-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </>
  );
}
