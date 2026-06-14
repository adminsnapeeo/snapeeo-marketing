import { Aperture, Menu } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { ViewId } from '../../types';
import { AppStoreBadges } from '../ui/AppStoreBadges';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

const navItems: { label: string; view: ViewId; sectionId?: string }[] = [
  { label: 'Home', view: 'home' },
  { label: 'How It Works', view: 'home', sectionId: 'how-it-works' },
  { label: 'Services', view: 'services' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

export function Header() {
  const { activeView, setActiveView, scrollToSection } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (view: ViewId, sectionId?: string) => {
    setActiveView(view);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 300);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  const isNavActive = (view: ViewId, sectionId?: string) => {
    if (sectionId) return false;
    return activeView === view;
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-canvas/95 backdrop-blur-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="group flex items-center gap-2 transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
          >
            <div className="icon-badge h-9 w-9 rounded-lg">
              <Aperture className="h-5 w-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight gradient-text md:text-2xl">
              Snapeeo
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigate(item.view, item.sectionId)}
                className={`nav-link ${isNavActive(item.view, item.sectionId) ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <AppStoreBadges size="sm" />
            <Button size="sm">Book Now</Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="icon-badge h-10 w-10 rounded-xl active:scale-95"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={handleNavigate}
        activeView={activeView}
      />
    </>
  );
}
