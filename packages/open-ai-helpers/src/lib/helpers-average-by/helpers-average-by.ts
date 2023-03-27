/**
 * Calculates the average of an array of values, using either a given function
 * or a property name as a key for each element.
 *
 * @param arr - The array of values to be averaged.
 * @param fn - Either a function that maps each element of `arr` to a numeric value,
 * or a property name to be used as a key to extract a numeric value from each element.
 * @returns The average value of the array.
 */
export function HelpersAverageBy<T>(arr: T[], fn: keyof T | ((val: T) => number)): number {

  const mapperFn = typeof fn === 'function' ? fn : (val: T) => val[fn] as unknown as number;

  return arr
    .map(mapperFn)
    .reduce((acc, val) => acc + val, 0) / arr.length;
}