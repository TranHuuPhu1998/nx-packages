/**
 * Returns a new array containing the first n elements of the given array
 * @param arr - The input array
 * @param n - The number of elements to take from the beginning of the array (default 1)
 * @returns A new array containing the first n elements of the input array
 */
export function HelperTake<T>(arr: T[], n = 1): T[] {
  return arr.slice(0, n);
}
