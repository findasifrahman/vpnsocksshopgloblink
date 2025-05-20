import { format } from 'date-fns';

// Get current time in UTC
export function getCurrentGMTTime(): Date {
  return new Date();
}

// Format date to UTC string
export function formatToGMT(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'yyyy-MM-dd HH:mm:ss');
}

// Convert any date to UTC
export function convertToUTC(date: Date): Date {
  return new Date(date);
}

// Convert UTC to local time for display (GMT+6)
export function convertToLocalTime(date: Date): Date {
  const localDate = new Date(date);
  localDate.setHours(localDate.getHours() + 6);
  return localDate;
} 