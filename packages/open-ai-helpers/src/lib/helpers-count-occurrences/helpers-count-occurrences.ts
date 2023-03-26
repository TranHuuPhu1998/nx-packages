/**
 * Counts the number of occurrences of a value in an array.
 * @param arr - The array to search.
 * @param val - The value to count occurrences of.
 * @returns The number of occurrences of the value in the array.
 */

export function HelpersCountOccurrences<T>(arr: T[], val: T): number {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
