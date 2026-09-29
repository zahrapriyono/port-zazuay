'use client';

import { useState, useMemo } from 'react';

export function useShowMore<T>(items: T[], itemsPerPage: number) {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount],
  );

  const hasMore = visibleCount < items.length;

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerPage, items.length));
  };

  const showLess = () => {
    setVisibleCount(itemsPerPage);
  };

  return {
    visibleItems,
    hasMore,
    showMore,
    showLess,
    isExpanded: visibleCount > itemsPerPage,
  };
}
