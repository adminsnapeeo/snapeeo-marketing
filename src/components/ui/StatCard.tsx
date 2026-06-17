import { useEffect, useRef, useState } from 'react';

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
    <div className="card-dark group p-6 text-center transition-all duration-300 hover:shadow-card-hover md:p-8">
      <div ref={ref}>
        <p
          className={`text-4xl font-bold text-highlight md:text-5xl transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {value}
        </p>
        <p className="color-muted mt-3 text-sm font-medium transition-colors duration-300 group-hover:text-highlight">
          {label}
        </p>
      </div>
    </div>
  );
}
