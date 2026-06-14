import { Camera } from 'lucide-react';
import { useState } from 'react';

export type ImageVariant =
  | 'hero'
  | 'service'
  | 'gallery'
  | 'teaser'
  | 'about'
  | 'lightbox';

const variantClasses: Record<ImageVariant, string> = {
  hero: 'aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]',
  service: 'aspect-[16/10]',
  gallery: 'aspect-[4/5]',
  teaser: 'aspect-[3/4]',
  about: 'aspect-[4/3] min-h-[280px] lg:min-h-[360px]',
  lightbox: 'aspect-[4/3] max-h-[75vh] w-full max-w-5xl bg-surface',
};

interface ResponsiveImageProps {
  src: string;
  alt: string;
  variant: ImageVariant;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  /** Use when the image fills an already-sized parent (e.g. hero slide). */
  fill?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  variant,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fill = false,
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);

  if (fill) {
    return (
      <>
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading={loading}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover object-center ${imgClassName}`}
          />
        ) : (
          <ImagePlaceholder fill />
        )}
      </>
    );
  }

  const objectClass =
    variant === 'lightbox' ? 'object-contain' : 'object-cover';

  return (
    <div
      className={`relative overflow-hidden ${variantClasses[variant]} ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full ${objectClass} object-center ${imgClassName}`}
        />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
}

function ImagePlaceholder({ fill = false }: { fill?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center bg-brand-navy-mid ${
        fill ? 'absolute inset-0' : 'absolute inset-0 h-full w-full'
      }`}
      aria-hidden
    >
      <Camera className="h-8 w-8 text-brand-pink/40" />
      <span className="sr-only">Image placeholder — add photos to public/images/</span>
    </div>
  );
}
