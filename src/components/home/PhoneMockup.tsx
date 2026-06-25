import { Calendar, Camera, Home, MapPin, Search, Star, User } from 'lucide-react';

const photographers = [
  { name: 'Arjun M.', rating: 4.9, dist: '0.8 km', specialty: 'Portrait', avail: 'Today 4 PM' },
  { name: 'Priya K.', rating: 5.0, dist: '1.2 km', specialty: 'Travel', avail: 'Today 6 PM' },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-6 -z-10 rounded-full bg-brand-pink/12 blur-3xl" />

      <div className="relative rounded-[2.75rem] border-[3px] border-brand-pink/12 bg-white p-[10px] shadow-[0_20px_50px_-12px_rgba(244,114,182,0.15)]">
        <div className="absolute -left-[5px] top-24 h-10 w-[3px] rounded-l bg-brand-pink/20" />
        <div className="absolute -left-[5px] top-36 h-14 w-[3px] rounded-l bg-brand-pink/20" />
        <div className="absolute -right-[5px] top-32 h-16 w-[3px] rounded-r bg-brand-pink/20" />

        <div className="overflow-hidden rounded-[2.25rem] bg-white">
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-medium text-ink-muted">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-brand-pink animate-pulse" />
              <span className="text-brand-pink">Live</span>
            </div>
            <span>100%</span>
          </div>

          <div className="mx-auto mb-3 h-[22px] w-[90px] rounded-full bg-brand-pink-light/80" />

          <div className="px-4 pb-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-bold text-highlight">Snap<span className="text-brand-pink-dark">eeo</span></p>
                <div className="mt-0.5 flex items-center gap-1 text-[10px] text-ink-muted">
                  <MapPin className="h-3 w-3 text-brand-pink" />
                  Jaipur, Rajasthan
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-pink-muted border border-brand-pink/25">
                <Camera className="h-4 w-4 text-brand-pink" />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-xl border border-brand-pink/12 bg-brand-pink-muted px-3 py-2">
              <Search className="h-3.5 w-3.5 text-brand-pink" />
              <span className="text-[11px] text-ink-muted">Search photographers...</span>
            </div>
          </div>

          <div className="mx-4 mb-3 rounded-xl bg-gradient-brand px-3 py-2.5 shadow-glow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-white/85">Instant booking</p>
            <p className="text-xs font-semibold text-white">3 photographers available now</p>
          </div>

          <div className="space-y-2 px-4 pb-3">
            {photographers.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-center gap-2.5 rounded-xl border bg-white p-2.5 transition-all ${
                  i === 0
                    ? 'border-brand-pink/30'
                    : 'border-brand-pink/10'
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-pink to-brand-pink-light text-[10px] font-bold text-white">
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <p className="truncate text-[11px] font-semibold text-black">{p.name}</p>
                    <div className="flex items-center gap-0.5">
                      <Star className="h-2.5 w-2.5 fill-brand-pink text-brand-pink" />
                      <span className="text-[9px] text-brand-pink">{p.rating}</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-ink-muted">{p.specialty} · {p.dist}</p>
                  <p className="text-[9px] text-brand-pink">{p.avail}</p>
                </div>
                <button
                  type="button"
                  className={`shrink-0 rounded-lg px-2 py-1 text-[9px] font-bold ${
                    i === 0
                      ? 'bg-brand-pink text-white'
                      : 'border border-brand-pink/30 text-brand-pink'
                  }`}
                >
                  Book
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-around border-t border-brand-pink/10 bg-brand-pink-muted/50 px-2 py-2.5">
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Search, label: 'Find', active: false },
              { icon: Calendar, label: 'Bookings', active: false },
              { icon: User, label: 'Profile', active: false },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <Icon className={`h-4 w-4 ${active ? 'text-brand-pink' : 'text-ink-muted'}`} />
                <span className={`text-[8px] ${active ? 'font-semibold text-brand-pink' : 'text-ink-muted'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center pb-2 pt-1">
            <div className="h-1 w-16 rounded-full bg-brand-pink/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
