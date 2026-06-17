import { ArrowRight, Smartphone } from 'lucide-react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { Button } from '../ui/Button';

export function DownloadBanner() {
  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-white/15 p-8 text-center backdrop-blur-sm md:flex-row md:p-12 md:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/20">
            <Smartphone className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to book your photographer?
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/90 md:text-lg">
              Download Snapeeo — available on iOS and Android.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" variant="white">
              Book Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <AppStoreBadges light />
          </div>
        </div>
      </div>
    </section>
  );
}
