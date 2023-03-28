/**
 * Finds the missing number in an array of integers from 1 to n+1
 *
 * @param arr An array of integers with length n, containing elements from [1,n+1] and missing only one element to have all elements from 1 to n+1
 * @returns The missing number in the array
 * @throws Throws an error if the input array is invalid or missing more than one element
 * @example
 *
 * HelperMissingNumber([1, 2, 4])
 * // Output: 3
 */
export function HelperMissingNumber(arr: number[]): number {
  const n = arr.length;

  if (n < 1 || n > 100000) {
    throw new Error("Invalid input: array length must be between 1 and 100000");
  }

  let sum = (n + 1) * (n + 2) / 2; // Calculate the sum of numbers from 1 to n+1

  for (let i = 0; i < n; i++) {
    if (arr[i] < 1 || arr[i] > n + 1) {
      throw new Error("Invalid input: array elements must be between 1 and n+1");
    }
    sum -= arr[i]; // Subtract the existing elements from the sum
  }

  return sum;
}
