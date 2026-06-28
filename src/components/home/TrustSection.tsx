import { BadgeCheck, Camera, ShieldCheck, Smartphone } from 'lucide-react';
import {
  launchMetrics,
  trustBadges,
} from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

const badgeIcons = {
  identity: BadgeCheck,
  mobile: Smartphone,
  portfolio: Camera,
  quality: ShieldCheck,
} as const;

export function TrustSection() {
  return (
    <section id="trust" className="section-base scroll-mt-24 pt-16 pb-8 md:pt-20 md:pb-12 lg:pb-14">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          light
          badge="Pre-launch · Honest growth"
          title="Join Your City's First Photography Marketplace"
          subtitle="Launching in your city, expanding city by city across India. Early Access Open — Be the First to Book."
        />

        <div className="mx-auto mb-10 grid max-w-lg grid-cols-2 gap-4 md:gap-5">
          <div className="card-on-pink p-5 text-center md:p-6">
            <p className="text-3xl font-bold text-white md:text-4xl">
              {launchMetrics.photographersOnboarded}
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">Photographers onboarded</p>
          </div>
          <div className="card-on-pink p-5 text-center md:p-6">
            <p className="text-3xl font-bold text-white md:text-4xl">
              {launchMetrics.waitlistUsers}
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">Waitlist users</p>
          </div>
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-white/75 md:text-base">
          Small real numbers beat fake big ones. Every photographer below has passed our
          verification — no fabricated reviews, no inflated scale.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
          {trustBadges.map((badge) => {
            const Icon = badgeIcons[badge.id as keyof typeof badgeIcons];

            return (
              <div key={badge.id} className="trust-badge">
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
