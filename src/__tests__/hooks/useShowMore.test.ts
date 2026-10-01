import { renderHook, act } from '@testing-library/react';
import { useShowMore } from '@/hooks/useShowMore';

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

describe('useShowMore', () => {
  it('initially shows only itemsPerPage items', () => {
    const { result } = renderHook(() => useShowMore(items, 3));
    expect(result.current.visibleItems).toEqual(['a', 'b', 'c']);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.isExpanded).toBe(false);
  });

  it('shows more items when showMore is called', () => {
    const { result } = renderHook(() => useShowMore(items, 3));

    act(() => result.current.showMore());
    expect(result.current.visibleItems).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.isExpanded).toBe(true);
  });

  it('caps at total items length', () => {
    const { result } = renderHook(() => useShowMore(items, 3));

    act(() => result.current.showMore());
    act(() => result.current.showMore());
    expect(result.current.visibleItems).toEqual(items);
    expect(result.current.hasMore).toBe(false);
  });

  it('resets to initial count on showLess', () => {
    const { result } = renderHook(() => useShowMore(items, 3));

    act(() => result.current.showMore());
    act(() => result.current.showLess());
    expect(result.current.visibleItems).toEqual(['a', 'b', 'c']);
    expect(result.current.isExpanded).toBe(false);
  });
});
