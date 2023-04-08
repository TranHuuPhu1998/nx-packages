
/**
 * Calculates the average value of an array of numbers.
 * @param numbers The array of numbers to calculate the average value.
 * @returns The average value of the array of numbers.
 */

export function average(...numbers: number[]): number {
  if (typeof numbers !== 'object' || !Array.isArray(numbers) || numbers.length <= 0) {
    throw new Error('Numbers not Unknown');
  }

  return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
};