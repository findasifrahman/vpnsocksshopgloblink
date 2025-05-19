import { format, addHours } from 'date-fns';

// Convert UTC date to GMT
export function convertToGMT(date: Date): Date {
  // Ensure we're working with a Date object
  const d = new Date(date);
  // Add 6 hours to convert from UTC to GMT+6 (Bangladesh time)
  return addHours(d, 6);
}

// Format date to GMT string
export function formatToGMT(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  // Convert to GMT+6 before formatting
  const gmtDate = convertToGMT(dateObj);
  return format(gmtDate, 'yyyy-MM-dd HH:mm:ss');
}

// Get current time in GMT
export function getCurrentGMTTime(): Date {
  const now = new Date();
  return convertToGMT(now);
}

// Convert local time to UTC for database storage
export function convertToUTC(date: Date): Date {
  // Ensure we're working with a Date object
  const d = new Date(date);
  // Subtract 6 hours to convert from GMT+6 to UTC
  return addHours(d, -6);
} 