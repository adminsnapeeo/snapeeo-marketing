import { aboutImage } from '../../data/content';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { PageHero } from '../ui/PageHero';

export function AboutSection() {
  return (
    <>
      <PageHero
        badge="Our mission"
        title="About Snapeeo"
        subtitle="We're building the photography marketplace for your city — connecting customers with local photographers. Find. Book. Shoot. Receive."
        align="left"
      />

      <section className="section-page view-transition">
        <div className="mx-auto max-w-content px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5">
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Snapeeo is not a photography studio. We&apos;re a platform — like Uber for rides,
                but for photography. Customers find and book independent photographers;
                photographers get discovered and paid through one app.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                We&apos;re pre-launch and starting locally because we&apos;d rather build
                something real on the ground than claim global scale we don&apos;t have yet.
                Honest growth beats fake social proof every time.
              </p>
              <p className="color-muted text-base leading-relaxed md:text-lg">
                Photographer onboarding is our top priority. If you shoot in your city, we want
                you on the platform before customers even download the app.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-[rgba(233,78,137,0.12)] bg-white shadow-[0_24px_60px_-10px_rgba(233,78,137,0.15)] transition-all duration-500 hover:border-[rgba(233,78,137,0.25)]">
              <ResponsiveImage src={aboutImage} alt="Local photographer on the Snapeeo platform" variant="about" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fce7f3]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
