/**
 * Recursively flattens an array of arrays.
 * @param arr - The array to be flattened.
 * @returns The flattened array.
 */

export function deepFlatten<T>(arr: T[]): T[] {
  return ([] as T[]).concat(
    ...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v))
  );
}
