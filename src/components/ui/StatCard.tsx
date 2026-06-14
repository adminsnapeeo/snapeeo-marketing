import { useEffect, useRef, useState } from 'react';
import { GlassCard } from './GlassCard';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <GlassCard className="group text-center transition-all duration-300 hover:border-brand-pink/30" hover={false}>
      <div ref={ref}>
        <p
          className={`font-serif text-3xl font-bold gradient-text md:text-4xl transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {value}
        </p>
        <p className="mt-2 text-sm text-ink-muted transition-colors duration-300 group-hover:text-brand-pink-light">
          {label}
        </p>
      </div>
    </GlassCard>
  );
}
