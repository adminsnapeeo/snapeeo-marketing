import { stats } from '../../data/content';
import { StatCard } from '../ui/StatCard';

export function TrustStats() {
  return (
    <section className="py-4 md:py-5">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 md:px-8 lg:px-12">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
