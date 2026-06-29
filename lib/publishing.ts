const DEFAULT_TIMEZONE = "+04:00";

export function publishDate(value: string): Date {
  if (value.includes("T")) {
    return new Date(value);
  }

  return new Date(`${value}T00:00:00${DEFAULT_TIMEZONE}`);
}

export function isPublished(value: string, now = new Date()): boolean {
  return publishDate(value).getTime() <= now.getTime();
}

export function compareNewestFirst(a: string, b: string): number {
  return publishDate(b).getTime() - publishDate(a).getTime();
}

export function toRfc822(value: string): string {
  return publishDate(value).toUTCString();
}
