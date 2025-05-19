import { format } from 'date-fns';

// Convert UTC date to GMT
export function convertToGMT(date: Date): Date {
  return date;
}

// Format date to GMT string
export function formatToGMT(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'yyyy-MM-dd HH:mm:ss');
}

// Get current time in GMT
export function getCurrentGMTTime(): Date {
  return new Date();
}

// Convert local time to UTC for database storage
export function convertToUTC(date: Date): Date {
  return date;
} 