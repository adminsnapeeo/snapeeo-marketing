import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function ContactSection() {
  return (
    <section className="mx-auto max-w-content px-4 py-[2.4rem] md:px-8 md:py-[3.6rem] lg:px-12 view-transition">
      <SectionHeading
        badge="Contact"
        title="Get in Touch"
        subtitle="Questions about booking or partnering with Snapeeo? We're here to help."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <GlassCard hover={false}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Full Name
              </label>
              <input id="name" type="text" required placeholder="Jane Doe" className="input-dark" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                Email Address
              </label>
              <input id="email" type="email" required placeholder="jane@example.com" className="input-dark" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea id="message" rows={5} required placeholder="Tell us about your photography needs..." className="input-dark resize-none" />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </GlassCard>

        <div className="space-y-5">
          {[
            { icon: MapPin, title: 'Visit Us', detail: 'Hawa Mahal, Jaipur, Rajasthan' },
            { icon: Mail, title: 'Email', detail: 'admin.snapeeo@gmail.com' },
            { icon: Phone, title: 'Phone', detail: '+91 9879879879' },
            { icon: Clock, title: 'Hours', detail: 'Mon – Fri: 9am – 6pm PST\nSat: 10am – 4pm PST' },
          ].map(({ icon: Icon, title, detail }) => (
            <GlassCard key={title} className="group flex gap-4 transition-all duration-300 hover:border-brand-pink/30">
              <div className="icon-badge h-11 w-11 shrink-0 rounded-xl group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-brand-pink-light transition-colors duration-300">
                  {title}
                </h3>
                <p className="mt-1 whitespace-pre-line text-sm text-ink-muted">{detail}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
