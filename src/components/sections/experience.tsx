'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/experience';
import { BracketHeading } from '@/components/ui/bracketHeading';
import { PolaroidCard } from '@/components/ui/polaroidCard';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';

const DOTS: Array<[string, string, string]> = [
  ['-1%', '26%', 'h-10 w-10 sm:h-14 sm:w-14'],
  ['12%', '90%', 'h-9 w-9 sm:h-12 sm:w-12'],
  ['32%', '3%', 'h-8 w-8 sm:h-12 sm:w-12'],
  ['90%', '22%', 'h-9 w-9 sm:h-12 sm:w-12'],
  ['96%', '78%', 'h-8 w-8 sm:h-12 sm:w-12'],
];

export function Experience() {
  const rowRef = useRef<HTMLUListElement>(null);
  const sorted = [...experiences].sort((a, b) =>
    a.startDate < b.startDate ? 1 : -1,
  );

  const scrollByCard = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * 340, behavior: 'smooth' });
  };

  return (
    <section
      id="experience"
      className="bg-surface relative overflow-hidden py-16 sm:py-24"
    >
      {DOTS.map(([top, left, size]) => (
        <span
          key={`${top}-${left}`}
          aria-hidden
          className={`bg-dot-soft absolute rounded-full ${size}`}
          style={{ top, left }}
        />
      ))}

      <div className="relative">
        <BracketHeading title="Organization and Volunteering" />

        <AnimateOnScroll>
          <div className="relative">
            <ul
              ref={rowRef}
              tabIndex={0}
              aria-label="Organization and volunteering experience"
              className="no-scrollbar flex snap-x snap-mandatory items-start gap-8 overflow-x-auto scroll-smooth px-[max(1.5rem,calc(50%-10rem))] pb-4"
            >
              {sorted.map((exp) => (
                <li key={exp.id} className="contents">
                  <PolaroidCard experience={exp} />
                </li>
              ))}
            </ul>

            {/* Edge fades, as in the design */}
            <div
              aria-hidden
              className="from-surface pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r to-transparent sm:w-24"
            />
            <div
              aria-hidden
              className="from-surface pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l to-transparent sm:w-24"
            />
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground rounded-full border p-2 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground rounded-full border p-2 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
