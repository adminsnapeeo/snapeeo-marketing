import type { LucideIcon } from 'lucide-react';

export type ViewId = 'home' | 'services' | 'about' | 'contact';

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

export interface LightboxState {
  open: boolean;
  index: number;
}

export interface AppContextValue {
  activeView: ViewId;
  setActiveView: (view: ViewId) => void;
  focusedServiceId: string | null;
  goToService: (serviceId: string) => void;
  scrollToSection: (sectionId: string) => void;
  lightbox: LightboxState;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  setLightboxIndex: (index: number) => void;
}
