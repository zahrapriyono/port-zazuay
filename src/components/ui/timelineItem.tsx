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

  return (
    <div className="relative pl-10">
      {!isLast && (
        <span
          className="absolute top-6 bottom-0 left-2.75 w-px"
          style={{ backgroundColor: 'var(--border)' }}
          aria-hidden
        />
      )}
      <span
        className="absolute top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2"
        style={{
          borderColor: 'var(--primary)',
          backgroundColor: 'var(--background)',
        }}
        aria-hidden
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: 'var(--primary)' }}
        />
      </span>

      <div className="card mb-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
              badge.className,
            )}
          >
            {badge.icon} {badge.label}
          </span>
          <span className="text-muted-foreground text-xs">
            {formatDate(experience.startDate)} –{' '}
            {formatDate(experience.endDate)}
          </span>
        </div>
        <h3 className="text-foreground text-base font-semibold">
          {experience.title}
        </h3>
        <p className="text-muted-foreground mb-2 text-sm">
          {experience.organization}
        </p>
        <p className="text-foreground/90 mb-2 text-sm">
          {experience.description}
        </p>
        {experience.bullets.length > 0 && (
          <ul className="list-inside list-disc space-y-1">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="text-muted-foreground text-sm">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
