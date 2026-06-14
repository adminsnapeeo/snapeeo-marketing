import { Aperture, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { ViewId } from '../../types';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { Button } from '../ui/Button';
import { SocialBar } from './SocialBar';

interface FooterProps {
  onNavigate: (view: ViewId) => void;
}

const quickLinks: { label: string; view: ViewId }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Services', view: 'services' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'App Support', href: '#' },
];

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-elevated">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="icon-badge h-8 w-8 rounded-lg">
                <Aperture className="h-4 w-4" />
              </div>
              <span className="font-serif text-xl font-bold gradient-text">Snapeeo</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-ink-muted">
              Book verified photographers instantly. Real-time availability, seamless chat, and stunning photo delivery.
            </p>
            <SocialBar />
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-ink">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button type="button" onClick={() => onNavigate(link.view)} className="link-subtle">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-ink">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="link-subtle">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-ink">Stay Updated</h3>
            <p className="mb-4 text-sm text-ink-muted">
              Get booking tips and exclusive photographer offers.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="input-dark flex-1"
              />
              <Button type="submit" className="shrink-0 px-4">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-canvas">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-4 py-6 md:flex-row md:px-8 lg:px-12">
          <p className="text-center text-xs text-ink-muted md:text-left">
            © {new Date().getFullYear()} Snapeeo Inc. All rights reserved.
          </p>
          <AppStoreBadges size="sm" />
        </div>
      </div>
    </footer>
  );
}
