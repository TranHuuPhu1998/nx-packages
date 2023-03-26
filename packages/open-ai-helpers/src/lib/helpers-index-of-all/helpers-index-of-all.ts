/**
 * Return the indices of all occurrences of a given value in an array
 * @param arr - The array to search in
 * @param val - The value to search for
 * @returns An array of indices where the value is found in the input array
 */

export function HelpersIndexOfAll<T>(arr: T[], val: T): number[] {
  return arr.reduce((acc: number[], el: T, i: number) => (el === val ? [...acc, i] : acc), []);
}
