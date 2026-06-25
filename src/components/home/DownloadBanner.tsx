import { ArrowRight, Camera, Smartphone } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { Button } from '../ui/Button';

export function DownloadBanner() {
  const { setActiveView } = useApp();

  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div className="card-on-teal flex flex-col items-center gap-8 p-8 text-center md:flex-row md:p-12 md:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/20">
            <Smartphone className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1">
            <span className="section-pill-on-pink mb-3 inline-flex uppercase tracking-wide">
              Pre-launch · Your city first
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              The app is coming soon
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/90 md:text-lg">
              We&apos;re building Snapeeo honestly — starting in your city. Join the waitlist as a
              customer or apply early as a photographer.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="white">
                Join waitlist
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-teal"
                onClick={() => setActiveView('contact')}
              >
                <Camera className="h-5 w-5" />
                Join as a photographer
              </Button>
            </div>
            <AppStoreBadges light />
          </div>
        </div>
      </div>
    </section>
  );
}
