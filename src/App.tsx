import { useCallback, useMemo, useState } from 'react';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { LightboxModal } from './components/gallery/LightboxModal';
import { AppTeaser } from './components/home/AppTeaser';
import { DownloadBanner } from './components/home/DownloadBanner';
import { FAQ } from './components/home/FAQ';
import { FeaturedGallery } from './components/home/FeaturedGallery';
import { Hero } from './components/home/Hero';
import { HowItWorks } from './components/home/HowItWorks';
import { ServicesPreview } from './components/home/ServicesPreview';
import { Testimonials } from './components/home/Testimonials';
import { TrustStats } from './components/home/TrustStats';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ServicesGrid } from './components/services/ServicesGrid';
import { AppContext } from './context/AppContext';
import { useAppNavigation } from './hooks';
import type { AppContextValue, LightboxState } from './types';

function App() {
  const {
    activeView,
    setActiveView,
    focusedServiceId,
    goToService,
    clearFocusedService,
    scrollToSection,
  } = useAppNavigation();
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, index: 0 });

  const openLightbox = useCallback((index: number) => {
    setLightbox({ open: true, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, open: false }));
  }, []);

  const setLightboxIndex = useCallback((index: number) => {
    setLightbox((prev) => ({ ...prev, index }));
  }, []);

  const contextValue = useMemo<AppContextValue>(
    () => ({
      activeView,
      setActiveView,
      focusedServiceId,
      goToService,
      scrollToSection,
      lightbox,
      openLightbox,
      closeLightbox,
      setLightboxIndex,
    }),
    [
      activeView,
      setActiveView,
      focusedServiceId,
      goToService,
      scrollToSection,
      lightbox,
      openLightbox,
      closeLightbox,
      setLightboxIndex,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-canvas">
        <Header />
        <main key={activeView} className="view-transition">
          {activeView === 'home' && (
            <>
              <Hero />
              <TrustStats />
              <HowItWorks />
              <AppTeaser />
              <Testimonials />
              <FeaturedGallery />
              <ServicesPreview />
              <FAQ />
              <DownloadBanner />
            </>
          )}
          {activeView === 'services' && (
            <ServicesGrid onFocusComplete={clearFocusedService} />
          )}
          {activeView === 'about' && <AboutSection />}
          {activeView === 'contact' && <ContactSection />}
        </main>
        <Footer onNavigate={setActiveView} />
        <LightboxModal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
