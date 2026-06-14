import { useCallback, useEffect } from 'react';

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  return scrollToSection;
}

export function useFocusService(
  focusedServiceId: string | null,
  onClear: () => void,
) {
  useEffect(() => {
    if (!focusedServiceId) return;

    const timer = window.setTimeout(() => {
      const el = document.getElementById(`service-${focusedServiceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    const clearTimer = window.setTimeout(onClear, 2500);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(clearTimer);
    };
  }, [focusedServiceId, onClear]);
}

export function useLightboxKeyboard(
  open: boolean,
  onClose: () => void,
  onPrev: () => void,
  onNext: () => void,
) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose, onPrev, onNext]);
}
