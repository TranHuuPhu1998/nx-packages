/**
 * Removes falsy values (false, null, 0, "", undefined, and NaN) from an array.
 * @param arr - The array to compact.
 * @returns A new array with the falsy values removed.
 */

export function compact<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}
