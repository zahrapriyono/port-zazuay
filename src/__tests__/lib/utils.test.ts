import { cn, formatDate, escapeHtml } from '@/lib/utils';

describe('cn (class merge utility)', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'extra')).toBe('base extra');
  });

  it('resolves Tailwind conflicts', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });
});

describe('formatDate', () => {
  it('formats YYYY-MM to human-readable', () => {
    expect(formatDate('2026-01')).toBe('Jan 2026');
  });

  it('returns year only when no month', () => {
    expect(formatDate('2026')).toBe('2026');
  });

  it('returns "Present" as-is', () => {
    expect(formatDate('Present')).toBe('Present');
  });
});

describe('escapeHtml', () => {
  it('escapes HTML special characters', () => {
    expect(escapeHtml('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;',
    );
  });

  it('escapes ampersands', () => {
    expect(escapeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry');
  });

  it('returns safe strings unchanged', () => {
    expect(escapeHtml('Hello World')).toBe('Hello World');
  });
});
