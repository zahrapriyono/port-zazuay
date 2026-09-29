import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag?: string; // Small label above heading (e.g., "PROJECTS")
  title: string;
  highlight?: string; // Word to highlight in pink
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  highlight,
  className,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) return title;

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn('mb-10', className)}>
      {tag && (
        <span className="bg-primary/10 text-primary mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium">
          {tag}
        </span>
      )}
      <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
        {renderTitle()}
      </h2>
    </div>
  );
}
