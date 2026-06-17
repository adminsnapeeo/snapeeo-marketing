import { Aperture, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { ViewId } from '../../types';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { Button } from '../ui/Button';
import { SocialBar } from './SocialBar';

interface FooterProps {
  onNavigate: (view: ViewId) => void;
  embedded?: boolean;
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

export function Footer({ onNavigate, embedded = false }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer
      className={
        embedded
          ? 'pb-8 pt-4'
          : 'footer-standalone border-t border-[rgba(233,78,137,0.15)] pt-16 md:pt-20'
      }
    >
      <div className={`mx-auto max-w-content px-4 md:px-8 lg:px-12 ${embedded ? 'pb-6' : 'pb-12 md:pb-16'}`}>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="icon-badge icon-badge-on-pink h-9 w-9">
                <Aperture className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-white">
                Snape<span className="text-white/85">eo</span>
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white/80">
              Book verified photographers instantly. Real-time availability, seamless chat, and stunning photo delivery.
            </p>
            <SocialBar light />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.view)}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Stay Updated</h3>
            <p className="mb-4 text-sm text-white/80">
              Get booking tips and exclusive photographer offers.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="input-on-pink flex-1"
              />
              <Button type="submit" variant="white" className="shrink-0 px-5">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto max-w-content border-t border-white/20 px-4 pt-6 md:px-8 lg:px-12 ${
          embedded ? '' : 'pb-8'
        }`}
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs text-white/70 md:text-left">
            © {new Date().getFullYear()} Snapeeo Inc. All rights reserved.
          </p>
          <AppStoreBadges size="sm" light />
        </div>
      </div>
    </footer>
  );
}
