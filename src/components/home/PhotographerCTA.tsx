import { ArrowRight, Camera, IndianRupee, Sparkles, Users } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { photographerBenefits } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const iconMap = {
  camera: Camera,
  users: Users,
  rupee: IndianRupee,
  sparkles: Sparkles,
};

export function PhotographerCTA() {
  const { setActiveView } = useApp();

  return (
    <section id="for-photographers" className="section-base-tight-compact scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          light
          title="Photographers — join us first"
          subtitle="Snapeeo is a marketplace, not a studio. We're onboarding local photographers before launch — get early access, set your rates, and be first in line for bookings."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {photographerBenefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div key={benefit.title} className="card-on-pink p-6 md:p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-sm text-white/80 md:text-base">
            We&apos;re pre-launch and building honestly — no fake reviews, no inflated numbers.
            Just a platform designed to bring you more clients in your city.
          </p>
          <Button
            size="lg"
            variant="white"
            onClick={() => setActiveView('contact')}
          >
            Join as a photographer
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
