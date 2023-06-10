
/**
 * A function that checks if all elements in an array are equal to each other.
 * 
 * @param arr An array of elements of type T.
 * 
 * @returns A boolean value indicating whether all elements in the input array are equal to each other.
 * @throws An error if the input array is not valid (i.e., not an object or not an array).
 */

export function allEqual<T>(arr: T[]): boolean {

  if (typeof arr !== 'object' || !Array.isArray(arr) || arr.length <= 0) {
    throw new Error('Array not Unknown');
  }

  return arr.every(val => val === arr[0])
}
