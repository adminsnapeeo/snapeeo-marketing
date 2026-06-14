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
      {/* Solid backdrop — hides page content completely */}
      <div className="absolute inset-0 bg-[#0B1D3A]" />

      <div className="relative flex h-full flex-col">
        <div className="flex justify-end px-4 py-4">
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A3050] text-[#F8FAFC]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pb-16">
          {navItems.map((item) => {
            const isActive = activeView === item.view && !item.sectionId;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleItemClick(item.view, item.sectionId)}
                className={`rounded-lg px-4 py-4 text-left font-serif text-2xl transition-colors ${
                  isActive
                    ? 'font-bold text-[#F472B6]'
                    : 'font-medium text-[#F8FAFC] active:text-[#F472B6]'
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
