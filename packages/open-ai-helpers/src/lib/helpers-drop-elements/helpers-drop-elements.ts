/**
 * Returns a new array with the first n elements removed.
 * @param arr The input array to drop elements from.
 * @param n The number of elements to drop. Default is 1.
 * @returns A new array with the first n elements removed.
 */
export function drop<T>(arr: T[], n = 1): T[] {
  if (n < 0) {
    throw new Error('n must be a positive integer or zero.');
  }
  return arr.slice(n);
}
