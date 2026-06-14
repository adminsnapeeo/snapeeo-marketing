import { useCallback, useEffect, useState } from 'react';
import { buildRouteUrl, parseRoute } from '../routing';
import type { ViewId } from '../types';

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

export function useAppNavigation() {
  const scrollToSection = useScrollToSection();
  const [initialRoute] = useState(() => parseRoute());
  const [activeView, setActiveViewState] = useState<ViewId>(initialRoute.view);
  const [focusedServiceId, setFocusedServiceId] = useState<string | null>(
    initialRoute.serviceId,
  );

  const navigateTo = useCallback(
    (
      route: { view: ViewId; serviceId: string | null; sectionId: string | null },
      options?: { replace?: boolean },
    ) => {
      setActiveViewState(route.view);
      setFocusedServiceId(route.serviceId);

      const url = buildRouteUrl(route.view, {
        serviceId: route.serviceId,
        sectionId: route.sectionId,
      });
      const historyMethod = options?.replace ? 'replaceState' : 'pushState';
      window.history[historyMethod](null, '', url);

      if (route.view === 'home' && route.sectionId) {
        window.setTimeout(() => scrollToSection(route.sectionId!), 300);
      } else if (!route.serviceId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [scrollToSection],
  );

  const setActiveView = useCallback(
    (view: ViewId, sectionId?: string) => {
      navigateTo({
        view,
        serviceId: null,
        sectionId: sectionId ?? null,
      });
    },
    [navigateTo],
  );

  const goToService = useCallback(
    (serviceId: string) => {
      navigateTo({
        view: 'services',
        serviceId,
        sectionId: null,
      });
    },
    [navigateTo],
  );

  const clearFocusedService = useCallback(() => {
    setFocusedServiceId(null);

    const route = parseRoute();
    if (route.view === 'services' && route.serviceId) {
      window.history.replaceState(null, '', buildRouteUrl('services'));
    }
  }, []);

  useEffect(() => {
    if (initialRoute.view !== 'home' || !initialRoute.sectionId) return;

    const timer = window.setTimeout(
      () => scrollToSection(initialRoute.sectionId!),
      300,
    );
    return () => window.clearTimeout(timer);
  }, [initialRoute, scrollToSection]);

  useEffect(() => {
    const onPopState = () => {
      const route = parseRoute();
      setActiveViewState(route.view);
      setFocusedServiceId(route.serviceId);

      if (route.view === 'home' && route.sectionId) {
        window.setTimeout(() => scrollToSection(route.sectionId!), 100);
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [scrollToSection]);

  return {
    activeView,
    setActiveView,
    focusedServiceId,
    goToService,
    clearFocusedService,
    scrollToSection,
  };
}