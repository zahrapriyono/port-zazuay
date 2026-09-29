'use client';

import { cn } from '@/lib/utils';

interface ShowMoreButtonProps {
  hasMore: boolean;
  isExpanded: boolean;
  onShowMore: () => void;
  onShowLess: () => void;
}

export function ShowMoreButton({
  hasMore,
  isExpanded,
  onShowMore,
  onShowLess,
}: ShowMoreButtonProps) {
  if (!hasMore && !isExpanded) return null;

  return (
    <div className="mt-8 flex justify-center">
      {hasMore ? (
        <button
          onClick={onShowMore}
          className={cn(
            'rounded-full px-6 py-2.5 text-sm font-medium transition-all',
            'border-primary text-primary hover:bg-primary hover:text-primary-foreground border',
          )}
        >
          Show More
        </button>
      ) : (
        <button
          onClick={onShowLess}
          className="text-muted-foreground hover:text-foreground rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
        >
          Show Less
        </button>
      )}
    </div>
  );
}
