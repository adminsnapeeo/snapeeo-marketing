import { aboutImage } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { PageHero } from '../ui/PageHero';

export function AboutSection() {
  return (
    <>
      <PageHero title="About Snapeeo" align="left" />

      <section className="section-page view-transition">
        <div className="mx-auto max-w-content px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <p className="color-heading mb-8 text-2xl font-bold leading-snug md:text-3xl lg:max-w-2xl">
            Find. <span className="text-accent-pink">Book.</span>{' '}
            <span className="text-highlight">Shoot.</span> Receive.
          </p>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5">
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Snapeeo is building the photography marketplace for your city, connecting customers
                with talented local photographers in just a few taps.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                We&apos;re not a photography studio—we&apos;re a technology platform. Think of us
                as Uber for photography. Customers can easily discover, compare, and book
                independent photographers, while photographers gain more visibility, more bookings,
                and secure payments through one app.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                We&apos;re currently in our pre-launch phase and starting locally because we
                believe in building something real before expanding. Honest growth, trusted
                professionals, and great customer experiences matter more to us than claiming
                global scale.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Right now, our biggest focus is photographer onboarding. If you&apos;re a
                photographer in your city, we&apos;d love to have you join Snapeeo before we open
                the platform to customers.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Whether you&apos;re capturing birthdays, private events, parties, concerts, travel
                experiences, portraits, or business shoots, Snapeeo is here to make finding and
                booking the right photographer simple, fast, and reliable.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-[rgba(233,78,137,0.12)] bg-white shadow-[0_24px_60px_-10px_rgba(233,78,137,0.15)] transition-all duration-500 hover:border-[rgba(233,78,137,0.25)] lg:sticky lg:top-28">
              <ResponsiveImage src={aboutImage} alt="Local photographer on the Snapeeo platform" variant="about" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fce7f3]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
