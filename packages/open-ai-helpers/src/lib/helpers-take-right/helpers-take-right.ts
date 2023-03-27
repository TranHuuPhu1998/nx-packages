/**
 * Returns a new array containing the last n elements of the given array
 * @param arr - The input array
 * @param n - The number of elements to take (default: 1)
 * @returns A new array containing the last n elements of the input array
 */

export function HelperTakeRight<T>(arr: T[], n = 1): T[] {
  return arr.slice(arr.length - n, arr.length);
}