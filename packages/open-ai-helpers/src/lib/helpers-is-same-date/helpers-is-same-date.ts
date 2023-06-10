/**
 * Compare two dates to see if they represent the same date (ignoring time)
 * @param dateA - The first date to compare
 * @param dateB - The second date to compare
 * @returns A boolean indicating whether the two dates represent the same date (ignoring time)
 */

export const isSameDate = (dateA: Date, dateB: Date): boolean => dateA.toISOString() === dateB.toISOString();
