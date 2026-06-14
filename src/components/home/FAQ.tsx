import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-base scroll-mt-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-12">
        <SectionHeading
          badge="FAQ"
          title="Questions? We've Got Answers"
          subtitle="Everything you need to know about booking photographers on Snapeeo."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`card-dark overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-pink/30 shadow-glow-sm' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-300 hover:bg-brand-pink/5 active:bg-brand-pink/10"
                >
                  <span className={`font-semibold transition-colors duration-300 ${isOpen ? 'text-brand-pink-light' : 'text-ink'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-brand-pink' : 'text-ink-muted'}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 bg-canvas/40 px-5 py-4">
                    <p className="text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
