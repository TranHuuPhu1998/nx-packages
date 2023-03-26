/**
 * Returns the last element in an array that satisfies a provided testing function
 * @param arr The input array to search
 * @param fn The testing function. Receives the current element being processed and should return a boolean
 * @returns The last element in the array that satisfies the testing function. Returns undefined if no such element is found
 */

export function HelpersFindLast<T>(arr: T[], fn: (elem: T) => boolean): T | undefined {
  const filteredArr = arr.filter(fn);
  return filteredArr.pop();
}
