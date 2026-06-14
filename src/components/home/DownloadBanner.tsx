import { ArrowRight, Smartphone } from 'lucide-react';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { Button } from '../ui/Button';

export function DownloadBanner() {
  return (
    <section className="border-t border-white/8 mx-4 mb-10 pt-8 md:mx-8 md:pt-10 lg:mx-12">
      <div className="mx-auto max-w-content overflow-hidden rounded-3xl border border-brand-pink/20 bg-gradient-hero p-8 shadow-glow transition-all duration-500 hover:border-brand-pink/40 hover:shadow-[0_0_48px_-8px_rgba(225,29,141,0.5)] md:p-12 lg:p-16">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="icon-badge h-20 w-20 shrink-0 rounded-2xl">
            <Smartphone className="h-10 w-10" />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to Book Your Photographer?
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/75 md:text-lg">
              Download Snapeeo and book verified photographers instantly — available on iOS and Android.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-pink text-white shadow-glow hover:bg-brand-pink-light hover:opacity-100"
            >
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
