import {
  Baby,
  Briefcase,
  Cake,
  Camera,
  Globe2,
  GraduationCap,
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
  { value: '10k+', label: 'Happy Clients' },
  { value: '500+', label: 'Verified Photographers' },
  { value: '4.9★', label: 'App Rating' },
  { value: '50+', label: 'Cities Worldwide' },
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
    title: 'Search Nearby',
    description: 'Enter your location and see verified photographers available right now.',
    color: 'from-brand-pink-light to-brand-pink',
  },
  {
    step: '02',
    title: 'Book Instantly',
    description: 'Pick a time slot, confirm in seconds — no emails or waiting.',
    color: 'from-brand-pink-soft to-brand-pink-light',
  },
  {
    step: '03',
    title: 'Shoot & Chat',
    description: 'Meet your photographer and coordinate details in-app.',
    color: 'from-brand-pink-light to-brand-pink',
  },
  {
    step: '04',
    title: 'Get Your Photos',
    description: 'Edited galleries delivered straight to your phone.',
    color: 'from-brand-pink to-brand-pink-light',
  },
];

export const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Booked in Jaipur',
    quote:
      'Booked a photographer in under a minute before our trip to Hawa Mahal. Photos were stunning and delivered the same evening.',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Corporate event client',
    quote:
      'Snapeeo made our product launch coverage effortless. Real-time booking and professional results — highly recommend.',
    rating: 5,
  },
  {
    name: 'Priya Kapoor',
    role: 'Pre-wedding shoot',
    quote:
      'Found the perfect photographer for our pre-wedding shoot. The app chat feature made planning so easy.',
    rating: 5,
  },
];

export const heroFeatures = [
  {
    id: 'instant-booking',
    icon: Zap,
    title: 'Book in seconds',
    description:
      'Skip the back-and-forth. Browse verified photographers near you and confirm your session instantly.',
    stat: '60 sec avg.',
  },
  {
    id: 'delivered',
    icon: Smartphone,
    title: 'Photos on your phone',
    description:
      'See who’s available right now and receive beautifully edited galleries straight in the Snapeeo app.',
    stat: 'Same-day delivery',
  },
  {
    id: 'trusted',
    icon: Globe2,
    title: 'Trusted everywhere',
    description:
      'Join thousands of happy clients who book pro photographers across cities worldwide with confidence.',
    stat: '50+ cities',
  },
];

export const faqs = [
  {
    question: 'How fast can I book a photographer?',
    answer:
      'Most bookings take under 60 seconds. Search your city, pick an available photographer, and confirm instantly.',
  },
  {
    question: 'Are Snapeeo photographers verified?',
    answer:
      'Yes. Every photographer on Snapeeo passes identity verification, portfolio review, and background checks.',
  },
  {
    question: 'When do I receive my photos?',
    answer:
      'Delivery times vary by shoot type. Many sessions deliver edited galleries within 24–48 hours directly in the app.',
  },
  {
    question: 'Can I chat with my photographer before the shoot?',
    answer:
      'Absolutely. Use in-app chat to share location details, shot lists, outfit ideas, and timing before your session.',
  },
  {
    question: 'Which cities is Snapeeo available in?',
    answer:
      'Snapeeo is live in 50+ cities worldwide, including Jaipur, Delhi, Mumbai, Bangalore, and expanding rapidly.',
  },
];
