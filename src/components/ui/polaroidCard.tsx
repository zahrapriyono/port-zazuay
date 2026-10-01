'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Experience, ExperienceType } from '@/types';

const TYPE_LABEL: Record<ExperienceType, string> = {
  professional: 'Professional',
  organizational: 'Organization',
  volunteer: 'Volunteer',
};

interface PolaroidCardProps {
  experience: Experience;
}

export function PolaroidCard({ experience }: PolaroidCardProps) {
  const photos = experience.images ?? [];
  const [photoIndex, setPhotoIndex] = useState(0);
  const start = formatDate(experience.startDate);
  const end = formatDate(experience.endDate);
  const dateRange = start === end ? start : `${start} – ${end}`;

  return (
    <article className="bg-paper w-72 shrink-0 snap-center p-4 shadow-md sm:w-80">
      {/* Photo area (placeholder until photos are added) */}
      <div className="bg-dot-soft/40 relative aspect-square w-full overflow-hidden">
        {photos.length > 0 ? (
          <Image
            src={photos[photoIndex]}
            alt={`${experience.title} — ${experience.organization}`}
            fill
            sizes="320px"
            className="object-cover"
          />
        ) : (
          <div className="text-primary flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="font-mono text-xs tracking-[0.25em] uppercase">
              {TYPE_LABEL[experience.type]}
            </span>
            <span className="font-display text-2xl font-semibold tracking-[-0.03em]">
              {dateRange}
            </span>
          </div>
        )}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setPhotoIndex((i) => (i + 1) % photos.length)}
              aria-label="Next photo"
              className="bg-paper/80 text-paper-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1"
            >
              <ChevronRight size={18} strokeWidth={3} />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {photos.map((_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full ${i === photoIndex ? 'bg-paper-foreground' : 'bg-paper-foreground/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Caption */}
      <h3 className="text-paper-foreground mt-4 text-lg leading-tight font-bold">
        {experience.title}
      </h3>
      <p className="text-paper-muted mt-1 text-sm">{experience.organization}</p>
      <p className="text-paper-muted mt-1 font-mono text-xs">{dateRange}</p>

      {/* Full details, collapsed by default */}
      <details className="group mt-3">
        <summary className="text-primary cursor-pointer font-mono text-xs tracking-[0.2em] uppercase marker:content-none">
          <span className="group-open:hidden">Details +</span>
          <span className="hidden group-open:inline">Hide −</span>
        </summary>
        <p className="text-paper-foreground/90 mt-3 text-sm leading-relaxed">
          {experience.description}
        </p>
        {experience.bullets.length > 0 && (
          <ul className="text-paper-muted mt-2 list-disc space-y-1 pl-5 text-sm">
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </details>
    </article>
  );
}
