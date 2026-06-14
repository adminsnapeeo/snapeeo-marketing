import {
  Baby,
  Briefcase,
  Building2,
  Cake,
  Camera,
  Package,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { getStaticPhoto } from '../config/images';
import type { GalleryItem, Service, Stat } from '../types';

export const services: Service[] = [
  {
    id: 'pre-wedding',
    title: 'Pre-wedding Shoots',
    description: 'Romantic storytelling in stunning locations.',
    icon: Sparkles,
    gradient: 'from-pink-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(1),
  },
  {
    id: 'birthday',
    title: 'Birthday Photography',
    description: 'Capturing the joy of milestone celebrations.',
    icon: Cake,
    gradient: 'from-amber-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(2),
  },
  {
    id: 'maternity',
    title: 'Maternity Shoots',
    description: 'Elegant, fine-art celebration of motherhood.',
    icon: Star,
    gradient: 'from-purple-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(0),
  },
  {
    id: 'baby',
    title: 'Baby Shoots',
    description: 'Adorable, gentle newborn and toddler portraits.',
    icon: Baby,
    gradient: 'from-sky-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(1),
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional coverage for conferences, galas, and PR.',
    icon: Briefcase,
    gradient: 'from-slate-700/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(2),
  },
  {
    id: 'fashion',
    title: 'Fashion Portfolio Shoots',
    description: 'High-fashion editorial styles for models & designers.',
    icon: Camera,
    gradient: 'from-fuchsia-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(0),
  },
  {
    id: 'product',
    title: 'Product Photography',
    description: 'Crisp, commercial e-commerce product imagery.',
    icon: Package,
    gradient: 'from-emerald-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(1),
  },
  {
    id: 'influencer',
    title: 'Influencer Content Creation',
    description: 'Trendy, social-first aesthetics for creators.',
    icon: Users,
    gradient: 'from-orange-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(2),
  },
  {
    id: 'real-estate',
    title: 'Real Estate Photography',
    description: 'Wide-angle, high-dynamic-range interior & exterior shoots.',
    icon: Building2,
    gradient: 'from-teal-900/60 via-obsidian/80 to-obsidian',
    image: getStaticPhoto(0),
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: getStaticPhoto(0),
    alt: 'Hawa Mahal architectural photography',
    category: 'Travel',
  },
  {
    id: 'g2',
    src: getStaticPhoto(1),
    alt: 'Jantar Mantar heritage landmark shoot',
    category: 'Travel',
  },
  {
    id: 'g3',
    src: getStaticPhoto(2),
    alt: 'Professional male portrait',
    category: 'Portraits',
  },
  {
    id: 'g4',
    src: getStaticPhoto(0),
    alt: 'Natural light female portrait',
    category: 'Portraits',
  },
  {
    id: 'g5',
    src: getStaticPhoto(0),
    alt: 'Commercial retail photography',
    category: 'Commercial',
  },
  {
    id: 'g6',
    src: getStaticPhoto(1),
    alt: 'Historic monument travel photography',
    category: 'Travel',
  },
  {
    id: 'g7',
    src: getStaticPhoto(2),
    alt: 'Editorial portrait session',
    category: 'Portraits',
  },
  {
    id: 'g8',
    src: getStaticPhoto(1),
    alt: 'Corporate brand photography',
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
    description: 'Find available photographers near you and confirm your shoot in under 60 seconds.',
    icon: 'calendar' as const,
  },
  {
    title: 'Live Availability',
    description: 'See real-time slots, pricing, and photographer ratings before you book.',
    icon: 'sparkles' as const,
  },
  {
    title: 'Direct Chat',
    description: 'Message your photographer instantly to discuss location, style, and timing.',
    icon: 'message' as const,
  },
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Search & Compare',
    description: 'Enter your location and shoot type. Browse verified photographers with live availability.',
    color: 'from-brand-navy to-brand-navy-mid',
  },
  {
    step: '02',
    title: 'Book Instantly',
    description: 'Pick a time slot, confirm details, and secure your photographer in one tap.',
    color: 'from-brand-navy-mid to-brand-navy-light',
  },
  {
    step: '03',
    title: 'Shoot Day',
    description: 'Your photographer arrives on time. Chat, coordinate, and capture the moment.',
    color: 'from-brand-navy-light to-brand-pink',
  },
  {
    step: '04',
    title: 'Get Your Photos',
    description: 'Receive AI-curated, edited galleries delivered straight to your phone.',
    color: 'from-brand-pink to-brand-pink-light',
  },
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Booked a portrait shoot',
    quote: 'I booked a photographer in Jaipur within 2 minutes. Photos were delivered the same evening!',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Corporate event coverage',
    quote: 'Snapeeo made last-minute event photography effortless. Professional quality, zero hassle.',
    rating: 5,
  },
  {
    name: 'Ananya Kapoor',
    role: 'Travel photography',
    quote: 'The instant booking feature is a game-changer. Found an amazing photographer at Hawa Mahal on the spot.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'How fast can I book a photographer?',
    answer: 'Most bookings are confirmed instantly. Search by location, pick an available slot, and you\'re done in under 60 seconds.',
  },
  {
    question: 'Are all photographers verified?',
    answer: 'Yes. Every Snapeeo photographer passes identity verification, portfolio review, and client rating checks.',
  },
  {
    question: 'Can I chat with my photographer before the shoot?',
    answer: 'Absolutely. Once booked, you can message your photographer directly in the app to discuss details.',
  },
  {
    question: 'What photography services are available?',
    answer: 'From portraits and events to product and travel shoots — browse our full service list or book any custom session.',
  },
  {
    question: 'How do I receive my photos?',
    answer: 'Edited galleries are delivered to your app with AI-powered sorting. Download and share instantly.',
  },
];
