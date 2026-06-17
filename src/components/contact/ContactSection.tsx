import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { PageHero } from '../ui/PageHero';
import { Button } from '../ui/Button';

export function ContactSection() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in Touch"
        subtitle="Questions about booking or partnering with Snapeeo? We're here to help."
      />

      <div className="section-page view-transition pb-16 md:pb-24">
        <section className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <GlassCard hover={false}>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label htmlFor="name" className="color-heading mb-2 block text-sm font-bold">
                    Full Name
                  </label>
                  <input id="name" type="text" required placeholder="Jane Doe" className="input-dark" />
                </div>
                <div>
                  <label htmlFor="email" className="color-heading mb-2 block text-sm font-bold">
                    Email Address
                  </label>
                  <input id="email" type="email" required placeholder="jane@example.com" className="input-dark" />
                </div>
                <div>
                  <label htmlFor="message" className="color-heading mb-2 block text-sm font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about your photography needs..."
                    className="input-dark resize-none"
                  />
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
                <GlassCard key={title} className="group flex gap-4">
                  <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="color-heading text-lg font-bold transition-colors duration-300 group-hover:text-highlight">
                      {title}
                    </h3>
                    <p className="color-muted mt-1 whitespace-pre-line text-sm">{detail}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
