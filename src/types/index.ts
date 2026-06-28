import type { LucideIcon } from 'lucide-react';

export type ViewId = 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms';

export type GalleryCategory = 'All' | 'Travel' | 'Portraits' | 'Commercial';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'All'>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface GalleryStripItem {
  id: string;
  src: string;
  alt: string;
}

export type LightboxSource = 'gallery' | 'strip' | 'portfolio';

export type PortfolioLayout = 'hero' | 'wide' | 'tall' | 'normal' | 'accent';

export interface ServicePortfolioItem {
  id: string;
  src: string;
  fallbackSrcs?: string[];
  alt: string;
  layout: PortfolioLayout;
}

export interface LightboxState {
  open: boolean;
  index: number;
  source: LightboxSource;
}

export interface AppContextValue {
  activeView: ViewId;
  setActiveView: (view: ViewId, sectionId?: string) => void;
  focusedServiceId: string | null;
  goToService: (serviceId: string) => void;
  scrollToSection: (sectionId: string) => void;
  lightbox: LightboxState;
  openLightbox: (index: number, source?: LightboxSource) => void;
  closeLightbox: () => void;
  setLightboxIndex: (index: number) => void;
}
