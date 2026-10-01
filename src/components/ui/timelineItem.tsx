import Image from 'next/image';
import { cn, formatDate } from '@/lib/utils';
import type { Experience, ExperienceType } from '@/types';

const BADGE_STYLES: Record<
  ExperienceType,
  { label: string; icon: string; className: string }
> = {
  professional: {
    label: 'Professional',
    icon: '🏢',
    className:
      'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
  },
  organizational: {
    label: 'Organizational',
    icon: '🏛️',
    className:
      'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300',
  },
  volunteer: {
    label: 'Volunteer',
    icon: '🤝',
    className:
      'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300',
  },
};

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  const badge = BADGE_STYLES[experience.type];
  const start = formatDate(experience.startDate);
  const end = formatDate(experience.endDate);
  const dateRange = start === end ? start : `${start} – ${end}`;

  return (
    <div className="relative pl-10">
      {/* Connector line to the next item */}
      {!isLast && (
        <span
          aria-hidden
          className="bg-border absolute top-6 bottom-0 left-2.75 w-px"
        />
      )}

      {/* Timeline dot */}
      <span
        aria-hidden
        className="border-primary bg-background absolute top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2"
      >
        <span className="bg-primary h-2 w-2 rounded-full" />
      </span>

      <div className="card mb-6">
        {/* Badge + dates */}
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
              badge.className,
            )}
          >
            {badge.icon} {badge.label}
          </span>
          <span className="text-muted-foreground text-xs">{dateRange}</span>
        </div>

        {/* Optional logo + title */}
        <div className="mb-2 flex items-start gap-3">
          {experience.logo && (
            <Image
              src={experience.logo}
              alt={`${experience.organization} logo`}
              width={40}
              height={40}
              className="border-border h-10 w-10 shrink-0 rounded-md border object-contain p-0.5"
            />
          )}
          <div>
            <h3 className="text-foreground text-base font-semibold">
              {experience.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {experience.organization}
            </p>
          </div>
        </div>

        <p className="text-foreground/90 mb-2 text-sm">
          {experience.description}
        </p>

        {experience.bullets.length > 0 && (
          <ul className="mb-3 list-inside list-disc space-y-1">
            {experience.bullets.map((bullet, i) => (
              <li
                key={`${i}-${bullet}`}
                className="text-muted-foreground text-sm"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Optional event/activity photos */}
        {experience.images && experience.images.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pt-2">
            {experience.images.map((img, i) => (
              <Image
                key={`${i}-${img}`}
                src={img}
                alt={`${experience.organization} photo ${i + 1}`}
                width={128}
                height={80}
                className="border-border h-20 w-32 shrink-0 rounded-lg border object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
