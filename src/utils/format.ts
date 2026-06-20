// Formatting helpers.

export function formatDate(d: Date | string, opts?: Intl.DateTimeFormatOptions): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...opts,
  });
}

export function formatDateShort(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatYear(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.getFullYear().toString();
}

/**
 * Estimate reading time in minutes. Average reading speed: 200 wpm.
 */
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Slugify a string for safe use in URLs and IDs.
 */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
