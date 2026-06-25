import { useEffect, useState } from 'react';
import { Calendar, Camera, Home, MapPin, Search, Star, User } from 'lucide-react';

const photographers = [
  { name: 'Arjun M.', rating: 4.9, dist: '0.8 km', specialty: 'Portrait', avail: 'Today 4 PM' },
  { name: 'Priya K.', rating: 5.0, dist: '1.2 km', specialty: 'Travel', avail: 'Today 6 PM' },
];

const searchPhrases = [
  'Search photographers...',
  'Portrait near you...',
  'Pre-wedding in your city...',
];

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Find' },
  { icon: Calendar, label: 'Bookings' },
  { icon: User, label: 'Profile' },
] as const;

export function PhoneMockup() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);
  const [activeNav, setActiveNav] = useState(0);
  const [highlightedCard, setHighlightedCard] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhraseVisible(false);
      window.setTimeout(() => {
        setPhraseIndex((current) => (current + 1) % searchPhrases.length);
        setPhraseVisible(true);
      }, 220);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveNav((current) => (current + 1) % navItems.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightedCard((current) => (current + 1) % photographers.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="phone-mockup-shell relative mx-auto w-full max-w-[260px] sm:max-w-[280px]">
      <div className="phone-mockup-glow pointer-events-none absolute -inset-4 -z-10 rounded-full bg-brand-teal/10 blur-2xl sm:-inset-6 sm:blur-3xl" />

      <div className="relative rounded-[2.5rem] border-[3px] border-brand-teal/15 bg-white p-[8px] shadow-[0_20px_50px_-12px_rgba(82,169,153,0.18)] sm:rounded-[2.75rem] sm:p-[10px]">
        <div className="absolute -left-[5px] top-24 h-10 w-[3px] rounded-l bg-brand-teal/25" />
        <div className="absolute -left-[5px] top-36 h-14 w-[3px] rounded-l bg-brand-teal/25" />
        <div className="absolute -right-[5px] top-32 h-16 w-[3px] rounded-r bg-brand-teal/25" />

        <div className="phone-mockup-screen isolate overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]">
          <div className="mockup-muted flex items-center justify-between px-4 pb-1 pt-2.5 text-[10px] font-medium sm:px-5 sm:pt-3">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="mockup-teal font-semibold">Live</span>
            </div>
            <span>100%</span>
          </div>

          <div className="mx-auto mb-2.5 h-[20px] w-[80px] rounded-full bg-brand-pink-light/80 sm:mb-3 sm:h-[22px] sm:w-[90px]" />

          <div className="px-3.5 pb-2.5 sm:px-4 sm:pb-3">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="mockup-label text-sm font-bold sm:text-base">
                  Snap<span className="mockup-pink">eeo</span>
                </p>
                <div className="mockup-muted mt-0.5 flex items-center gap-1 text-[10px]">
                  <MapPin className="mockup-teal h-3 w-3 shrink-0" stroke="#52a999" />
                  <span className="truncate">Your city</span>
                </div>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-teal/25 bg-brand-teal-soft sm:h-8 sm:w-8">
                <Camera className="mockup-teal h-3.5 w-3.5 sm:h-4 sm:w-4" stroke="#52a999" />
              </div>
            </div>

            <div className="phone-mockup-search phone-mockup-search-bar mt-2.5 flex min-w-0 items-center gap-2 rounded-xl border px-2.5 py-1.5 sm:mt-3 sm:px-3 sm:py-2">
              <Search className="mockup-teal h-3.5 w-3.5 shrink-0" stroke="#52a999" />
              <span
                className="phone-mockup-search-text mockup-muted min-w-0 flex-1 truncate text-[10px] sm:text-[11px]"
                style={{ opacity: phraseVisible ? 1 : 0 }}
              >
                {searchPhrases[phraseIndex]}
              </span>
              <span className="phone-mockup-search-cursor shrink-0" aria-hidden="true" />
            </div>
          </div>

          <div className="phone-mockup-banner mx-3.5 mb-2.5 rounded-xl px-3 py-2 sm:mx-4 sm:mb-3 sm:py-2.5">
            <p className="mockup-white relative z-[1] text-[9px] font-semibold uppercase tracking-wide opacity-90 sm:text-[10px]">
              Instant booking
            </p>
            <p className="mockup-white relative z-[1] text-[11px] font-semibold leading-snug sm:text-xs">
              3 photographers nearby
            </p>
          </div>

          <div className="space-y-1.5 px-3.5 pb-2.5 sm:space-y-2 sm:px-4 sm:pb-3">
            {photographers.map((p, i) => {
              const isHighlighted = highlightedCard === i;

              return (
                <div
                  key={p.name}
                  className={`phone-mockup-card flex items-center gap-2 rounded-xl border bg-white p-2 transition-all duration-500 sm:gap-2.5 sm:p-2.5 ${
                    isHighlighted
                      ? 'border-brand-teal/40 shadow-[0_8px_20px_-8px_rgba(82,169,153,0.35)]'
                      : 'border-brand-teal/10 phone-mockup-card-dim'
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold sm:h-9 sm:w-9 ${
                      i === 0 ? 'phone-mockup-avatar-pink' : 'phone-mockup-avatar-teal'
                    }`}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex min-w-0 items-center justify-between gap-1">
                      <p className="mockup-label min-w-0 truncate text-[10px] font-semibold sm:text-[11px]">
                        {p.name}
                      </p>
                      <div className="flex shrink-0 items-center gap-0.5">
                        <Star className="h-2.5 w-2.5 fill-brand-teal text-brand-teal" stroke="#52a999" fill="#52a999" />
                        <span className="mockup-teal text-[9px] font-medium">{p.rating}</span>
                      </div>
                    </div>
                    <p className="mockup-muted truncate text-[9px]">
                      {p.specialty} · {p.dist}
                    </p>
                    <p className="mockup-teal truncate text-[9px] font-medium">{p.avail}</p>
                  </div>
                  <button
                    type="button"
                    className={`shrink-0 rounded-md px-1.5 py-1 text-[8px] font-bold transition-colors duration-300 sm:rounded-lg sm:px-2 sm:text-[9px] ${
                      isHighlighted
                        ? 'phone-mockup-book-active bg-brand-pink mockup-white'
                        : 'mockup-pink border border-brand-pink/30 bg-white'
                    }`}
                  >
                    Book
                  </button>
                </div>
              );
            })}
          </div>

          <div className="phone-mockup-nav-bar flex items-center justify-around px-1 py-2 sm:px-2 sm:py-2.5">
            {navItems.map(({ icon: Icon, label }, index) => {
              const isActive = activeNav === index;

              return (
                <div
                  key={label}
                  className={`phone-mockup-nav-item flex min-w-0 flex-1 flex-col items-center gap-0.5 ${
                    isActive ? 'phone-mockup-nav-item-active' : ''
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                      isActive ? 'mockup-teal' : 'mockup-muted'
                    }`}
                    stroke={isActive ? '#52a999' : '#6b7280'}
                  />
                  <span
                    className={`truncate text-[7px] sm:text-[8px] ${
                      isActive ? 'mockup-teal font-semibold' : 'mockup-muted font-medium'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center bg-white pb-1.5 pt-0.5 sm:pb-2 sm:pt-1">
            <div className="h-1 w-14 rounded-full bg-brand-teal/20 sm:w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
