/**
 * Returns an array with only the unique elements from the input array
 * @param arr The input array to be filtered
 * @returns An array with only the unique elements from the input array
 */

export function filterNonUnique<T>(arr: T[]): T[] {
  return arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
}
