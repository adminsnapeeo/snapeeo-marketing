import { useCallback, useMemo, useState } from 'react';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { LightboxModal } from './components/gallery/LightboxModal';
import { AppTeaser } from './components/home/AppTeaser';
import { DownloadBanner } from './components/home/DownloadBanner';
import { FAQ } from './components/home/FAQ';
import { FeatureBar } from './components/home/FeatureBar';
import { GalleryStrip } from './components/home/GalleryStrip';
import { Hero } from './components/home/Hero';
import { HowItWorks } from './components/home/HowItWorks';
import { ServicesPreview } from './components/home/ServicesPreview';
import { PhotographerCTA } from './components/home/PhotographerCTA';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { PrivacyPolicySection } from './components/legal/PrivacyPolicySection';
import { TermsOfServiceSection } from './components/legal/TermsOfServiceSection';
import { WaveDivider } from './components/ui/WaveDivider';
import { ServicesGrid } from './components/services/ServicesGrid';
import { ServicePortfolio } from './components/services/ServicePortfolio';
import { AppContext } from './context/AppContext';
import { useAppNavigation } from './hooks';
import type { AppContextValue, LightboxSource, LightboxState } from './types';

function App() {
  const {
    activeView,
    setActiveView,
    focusedServiceId,
    goToService,
    scrollToSection,
  } = useAppNavigation();
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, index: 0, source: 'gallery' });

  const openLightbox = useCallback((index: number, source: LightboxSource = 'gallery') => {
    setLightbox({ open: true, index, source });
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
      <div className="page-shell">
        <Header />
        <main key={activeView} className="view-transition">
          {activeView === 'home' && (
            <>
              <Hero />
              <FeatureBar />
              <GalleryStrip />
              <div className="section-pink">
                <HowItWorks />
                <div className="relative -mb-px">
                  <WaveDivider fill="#52A999" />
                </div>
              </div>
              <div className="section-teal">
                <AppTeaser />
                <div className="relative -mb-px">
                  <WaveDivider fill="#E94E89" />
                </div>
              </div>
              <div className="section-pink">
                <PhotographerCTA />
                <div className="relative -mb-px">
                  <WaveDivider fill="#52A999" />
                </div>
              </div>
              <div className="section-teal">
                <ServicesPreview />
                <div className="relative -mb-px">
                  <WaveDivider fill="#E94E89" />
                </div>
              </div>
              <div className="section-pink">
                <FAQ />
                <div className="relative -mb-px">
                  <WaveDivider fill="#52A999" />
                </div>
              </div>
              <div className="section-teal">
                <DownloadBanner />
                <div className="relative -mb-px">
                  <WaveDivider fill="#E94E89" />
                </div>
              </div>
              <div className="section-pink">
                <Footer onNavigate={setActiveView} embedded />
              </div>
            </>
          )}
          {activeView === 'services' && (
            focusedServiceId ? (
              <ServicePortfolio serviceId={focusedServiceId} />
            ) : (
              <ServicesGrid />
            )
          )}
          {activeView === 'about' && <AboutSection />}
          {activeView === 'contact' && <ContactSection />}
          {activeView === 'privacy' && <PrivacyPolicySection />}
          {activeView === 'terms' && <TermsOfServiceSection />}
        </main>
        {activeView !== 'home' && <Footer onNavigate={setActiveView} />}
        <LightboxModal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
