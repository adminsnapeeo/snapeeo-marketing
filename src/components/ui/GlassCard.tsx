import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div className={`surface-card p-6 md:p-7 ${hover ? 'surface-card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}
