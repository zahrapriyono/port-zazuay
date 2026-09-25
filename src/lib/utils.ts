import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely -> handle conflicts and conditional classes.
 * Use this everywhere instead of raw className strings.
 */

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string (YYYY-MM) to human-readable format
 */
export function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';

  const [year, month] = dateStr.split('-');
  if (!month) return year;

  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Sanitize user input, escape HTML to prevent XSS.
 */
export function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return str.replace(/[&<>"']/g, (char) => map[char]);
}
