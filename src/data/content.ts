import {
  Baby,
  Briefcase,
  Cake,
  Camera,
  GraduationCap,
  MapPin,
  Package,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import {
  getServiceCoverUrl,
  getServicePortfolioImageFallbacks,
  getServicePortfolioImageUrl,
  getStaticPhoto,
  PORTFOLIO_GALLERY_BASENAMES,
} from '../config/images';
import type { GalleryItem, Service, ServicePortfolioItem, Stat } from '../types';

export const services: Service[] = [
  {
    id: 'pre-wedding',
    title: 'Pre-wedding Shoots',
    description: 'Romantic storytelling in stunning locations across Jaipur and beyond.',
    icon: Sparkles,
    gradient: 'from-brand-pink-light/50 via-brand-pink-soft/25 to-transparent',
    image: getServiceCoverUrl('pre-wedding'),
  },
  {
    id: 'birthday',
    title: 'Birthday Photography',
    description: 'Capturing the joy of milestone celebrations with vibrant, candid shots.',
    icon: Cake,
    gradient: 'from-brand-pink/70 via-brand-pink-soft/30 to-transparent',
    image: getServiceCoverUrl('birthday'),
  },
  {
    id: 'maternity',
    title: 'Maternity Shoots',
    description: 'Elegant, fine-art celebration of motherhood in beautiful settings.',
    icon: Star,
    gradient: 'from-brand-pink-light/75 via-brand-pink-soft/25 to-transparent',
    image: getServiceCoverUrl('maternity'),
  },
  {
    id: 'baby',
    title: 'Baby Shoots',
    description: 'Adorable, gentle newborn and toddler portraits you will treasure forever.',
    icon: Baby,
    gradient: 'from-brand-pink-light/65 via-brand-pink-soft/30 to-transparent',
    image: getServiceCoverUrl('baby'),
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional coverage for conferences, galas, and brand launches.',
    icon: Briefcase,
    gradient: 'from-brand-pink-light/50 via-brand-pink-soft/25 to-transparent',
    image: getServiceCoverUrl('corporate'),
  },
  {
    id: 'fashion',
    title: 'Fashion Portfolio Shoots',
    description: 'High-fashion editorial styles for models, designers, and creators.',
    icon: Camera,
    gradient: 'from-brand-pink/65 via-brand-pink-soft/30 to-transparent',
    image: getServiceCoverUrl('fashion'),
  },
  {
    id: 'product',
    title: 'Product Photography',
    description: 'Crisp, commercial e-commerce and catalog product imagery.',
    icon: Package,
    gradient: 'from-brand-pink-light/75 via-brand-pink-soft/25 to-transparent',
    image: getServiceCoverUrl('product'),
  },
  {
    id: 'influencer',
    title: 'Influencer Content Creation',
    description: 'Trendy, social-first aesthetics tailored for creators and brands.',
    icon: Users,
    gradient: 'from-brand-pink-light/65 via-brand-pink-soft/30 to-transparent',
    image: getServiceCoverUrl('influencer'),
  },
  {
    id: 'college-universities',
    title: 'College & Universities',
    description: 'Campus events, graduation ceremonies, and university lifestyle photography.',
    icon: GraduationCap,
    gradient: 'from-brand-pink-light/50 via-brand-pink-soft/25 to-transparent',
    image: getServiceCoverUrl('college-universities'),
  },
];

const portfolioLayouts: ServicePortfolioItem['layout'][] = [
  'hero',
  'wide',
  'tall',
  'normal',
  'normal',
  'wide',
  'accent',
];

const portfolioGalleryLabels: Record<(typeof PORTFOLIO_GALLERY_BASENAMES)[number], string> = {
  '01-featured': 'Featured',
  '02-wide': 'Wide',
  '03-tall': 'Tall',
  '04-normal': 'Gallery',
  '05-normal': 'Gallery',
  '06-wide': 'Wide',
  '07-accent': 'Accent',
};

function buildServicePortfolio(serviceId: string, title: string): ServicePortfolioItem[] {
  return PORTFOLIO_GALLERY_BASENAMES.map((basename, index) => ({
    id: `${serviceId}-${index + 1}`,
    src: getServicePortfolioImageUrl(serviceId, basename),
    fallbackSrcs: getServicePortfolioImageFallbacks(serviceId, basename),
    alt: `${title} — ${portfolioGalleryLabels[basename]}`,
    layout: portfolioLayouts[index],
  }));
}

export const servicePortfolios: Record<string, ServicePortfolioItem[]> = Object.fromEntries(
  services.map((service) => [
    service.id,
    buildServicePortfolio(service.id, service.title),
  ]),
);

export function getServicePortfolio(serviceId: string): ServicePortfolioItem[] {
  return servicePortfolios[serviceId] ?? [];
}

export function getServiceById(serviceId: string): Service | undefined {
  return services.find((service) => service.id === serviceId);
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: getStaticPhoto(0),
    alt: 'Hawa Mahal landmark photography',
    category: 'Travel',
  },
  {
    id: 'g2',
    src: getStaticPhoto(1),
    alt: 'Jantar Mantar architectural shoot',
    category: 'Travel',
  },
  {
    id: 'g3',
    src: getStaticPhoto(2),
    alt: 'Jaipur heritage monument portrait',
    category: 'Travel',
  },
  {
    id: 'g4',
    src: getStaticPhoto(0),
    alt: 'Natural light portrait session',
    category: 'Portraits',
  },
  {
    id: 'g5',
    src: getStaticPhoto(1),
    alt: 'Commercial brand photography',
    category: 'Commercial',
  },
  {
    id: 'g6',
    src: getStaticPhoto(2),
    alt: 'Travel photography at historic site',
    category: 'Travel',
  },
  {
    id: 'g7',
    src: getStaticPhoto(0),
    alt: 'Editorial portrait session',
    category: 'Portraits',
  },
  {
    id: 'g8',
    src: getStaticPhoto(1),
    alt: 'Product and commercial shoot',
    category: 'Commercial',
  },
];

export { aboutImage, heroImages } from '../config/images';

export const stats: Stat[] = [
  { value: 'Jaipur', label: 'Launch City' },
  { value: 'Pre-launch', label: 'Building Now' },
  { value: 'Open', label: 'Photographer Spots' },
  { value: '4 steps', label: 'Find · Book · Shoot · Receive' },
];

export const serviceTeasers = [
  { id: 'pre-wedding', label: 'Pre-wedding', image: getStaticPhoto(0) },
  { id: 'fashion', label: 'Fashion', image: getStaticPhoto(2) },
  { id: 'product', label: 'Commercial', image: getStaticPhoto(2) },
  { id: 'portrait', label: 'Portraits', image: getStaticPhoto(1) },
];

export const appFeatures = [
  {
    title: 'Instant Booking',
    description: 'Schedule professional shoots in seconds with real-time availability.',
    icon: 'calendar' as const,
  },
  {
    title: 'AI Photo Delivery',
    description: 'Receive curated, edited galleries powered by intelligent sorting.',
    icon: 'sparkles' as const,
  },
  {
    title: 'Direct Chat with Photographers',
    description: 'Communicate seamlessly with your photographer before and after shoots.',
    icon: 'message' as const,
  },
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Find',
    description: 'Browse verified photographers in Jaipur — compare styles, portfolios, and availability.',
    color: 'from-brand-pink-light to-brand-pink',
  },
  {
    step: '02',
    title: 'Book',
    description: 'Pick a time slot and confirm instantly. No DMs, no waiting, no guesswork.',
    color: 'from-brand-pink-soft to-brand-pink-light',
  },
  {
    step: '03',
    title: 'Shoot',
    description: 'Meet your photographer and coordinate details in-app before and during the session.',
    color: 'from-brand-pink-light to-brand-pink',
  },
  {
    step: '04',
    title: 'Receive',
    description: 'Edited galleries delivered straight to your phone when the shoot is done.',
    color: 'from-brand-pink to-brand-pink-light',
  },
];

export const photographerBenefits = [
  {
    icon: 'camera' as const,
    title: 'Your portfolio, your rates',
    description: 'List your work, set your pricing, and control which shoots you take on.',
  },
  {
    icon: 'users' as const,
    title: 'Clients come to you',
    description: 'Stop chasing leads on Instagram. Customers find and book you through the platform.',
  },
  {
    icon: 'rupee' as const,
    title: 'Get paid on your terms',
    description: 'Transparent bookings with clear scope — less haggling, more shooting.',
  },
  {
    icon: 'sparkles' as const,
    title: 'Early access in Jaipur',
    description: 'Join before launch and be first in line when bookings open in your city.',
  },
];

export const heroFeatures = [
  {
    id: 'find',
    icon: MapPin,
    title: 'Find in Jaipur',
    description:
      'Browse local photographers by style and availability — starting in Jaipur, expanding city by city.',
    stat: 'Jaipur first',
  },
  {
    id: 'book',
    icon: Zap,
    title: 'Book in seconds',
    description:
      'Skip the back-and-forth. Confirm your session on the platform — like ordering a ride, but for photography.',
    stat: 'Instant booking',
  },
  {
    id: 'receive',
    icon: Smartphone,
    title: 'Receive in the app',
    description:
      'Chat with your photographer, track your shoot, and get edited photos delivered to your phone.',
    stat: 'End-to-end',
  },
];

export const faqs = [
  {
    question: 'What is Snapeeo?',
    answer:
      'Snapeeo is a photography marketplace — not a studio. We connect customers with independent photographers in Jaipur. Think Uber for rides, Snapeeo for photography: Find. Book. Shoot. Receive.',
  },
  {
    question: 'Is Snapeeo live yet?',
    answer:
      'We are pre-launch and building in Jaipur right now. The app is coming soon — join the waitlist as a customer or apply early as a photographer.',
  },
  {
    question: 'How do I book a photographer?',
    answer:
      'Once live, you will browse verified photographers in Jaipur, pick a time slot, and confirm instantly in the app — no endless DMs or waiting for replies.',
  },
  {
    question: 'I am a photographer — how do I join?',
    answer:
      'Photographer onboarding is our top priority. Apply through our contact page to get early access, list your portfolio, and be first in line when bookings open in Jaipur.',
  },
  {
    question: 'Are you expanding beyond Jaipur?',
    answer:
      'Jaipur is our launch city. We will expand to more cities once the platform works well locally — no fake global scale, just honest growth.',
  },
];
