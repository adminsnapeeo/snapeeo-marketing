import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ViewId } from '../../types';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (view: ViewId, sectionId?: string) => void;
  activeView: ViewId;
}

const navItems: { label: string; view: ViewId; sectionId?: string }[] = [
  { label: 'Home', view: 'home' },
  { label: 'How It Works', view: 'home', sectionId: 'how-it-works' },
  { label: 'Services', view: 'services' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

export function MobileMenu({ open, onClose, onNavigate, activeView }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  const handleItemClick = (view: ViewId, sectionId?: string) => {
    onNavigate(view, sectionId);
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="absolute inset-0 bg-brand-pink" />

      <div className="relative flex h-full flex-col">
        <div className="flex justify-end px-5 py-5">
          <button type="button" aria-label="Close menu" onClick={onClose} className="icon-badge-on-pink flex h-11 w-11 items-center justify-center rounded-full">
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 px-8 pb-20">
          {navItems.map((item) => {
            const isActive = activeView === item.view && !item.sectionId;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleItemClick(item.view, item.sectionId)}
                className={`rounded-2xl px-5 py-4 text-left text-2xl font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>,
    document.body,
  );
}
