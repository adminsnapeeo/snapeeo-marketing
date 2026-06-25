import { Instagram /* , Linkedin, Youtube */ } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SVGProps } from 'react';
// import { PinterestIcon } from '../ui/PinterestIcon';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

type SocialIcon = LucideIcon | ((props: SVGProps<SVGSVGElement>) => JSX.Element);

const socialLinks: { icon: SocialIcon; label: string; href: string }[] = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/snapeeo?igsh=MTNwdjBrMzN2NXBxag%3D%3D' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/message/Y2MO3QU2RYZJE1' },
  // { icon: PinterestIcon, label: 'Pinterest', href: 'https://pinterest.com' },
  // { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  // { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
];

interface SocialBarProps {
  className?: string;
  vertical?: boolean;
  light?: boolean;
}

export function SocialBar({ className = '', vertical = false, light = false }: SocialBarProps) {
  return (
    <div
      className={`flex ${vertical ? 'flex-col gap-4' : 'items-center gap-3'} ${className}`}
    >
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`icon-badge h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
            light ? 'icon-badge-on-pink !bg-white/20' : ''
          }`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
