import { stats } from '../../data/content';
import { StatCard } from '../ui/StatCard';

export function TrustStats() {
  return (
    <section className="pb-8 pt-4 md:pb-12 md:pt-6">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 md:px-8 lg:px-12">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
