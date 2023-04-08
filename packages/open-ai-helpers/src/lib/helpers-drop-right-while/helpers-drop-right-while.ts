/**
 * Drops elements from the end of an array until the predicate function returns falsey.
 * @param arr The input array to be processed.
 * @param func The predicate function used to test the elements.
 * @returns Returns the new array of dropped elements.
 */
export function dropRightWhile<T>(arr: T[], func: (value: T) => boolean): T[] {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
