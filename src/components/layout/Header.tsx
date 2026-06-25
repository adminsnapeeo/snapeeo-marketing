import { Aperture, Menu } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { ViewId } from '../../types';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

const navItems: { label: string; view: ViewId; sectionId?: string }[] = [
  { label: 'About', view: 'about' },
  { label: 'Services', view: 'services' },
  { label: 'Contact', view: 'contact' },
];

export function Header() {
  const { activeView, setActiveView } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (view: ViewId, sectionId?: string) => {
    setActiveView(view, sectionId);
  };

  const isNavActive = (view: ViewId) => activeView === view;

  return (
    <>
      <header className="site-header sticky top-0 z-40 w-full border-b border-gray-100/80 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3.5 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2.5 transition-transform active:scale-[0.98]"
          >
            <div className="icon-badge h-9 w-9 rounded-xl">
              <Aperture className="h-4 w-4" />
            </div>
            <span className="color-heading text-xl font-bold">
              Snap<span className="text-highlight">eeo</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className={`nav-link ${activeView === 'home' ? 'nav-link-active' : ''}`}
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigate(item.view, item.sectionId)}
                className={`nav-link ${isNavActive(item.view) ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button size="sm" variant="outline" onClick={() => handleNavigate('contact')}>
              Join as a photographer
            </Button>
            <Button size="sm" onClick={() => handleNavigate('home', 'how-it-works')}>
              Find a photographer
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="icon-badge h-10 w-10 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
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
