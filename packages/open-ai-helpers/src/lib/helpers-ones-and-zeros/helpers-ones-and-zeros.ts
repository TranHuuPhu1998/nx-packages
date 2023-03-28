/**
 * Calculates the minimum length of a string that can remain after applying a described operation several times.
 * @param {string} s The input string with length n contains only the characters specified by `one` and `zero`.
 * @param {string} one The character representing "one".
 * @param {string} zero The character representing "zero".
 * @returns {number} The minimum length of the string that may remain after applying the described operations several times.
 * @example
 * onesAndZeros("101", "1", "0") // Output: 1
 */
export function HelpersOnesAndZeros(s: string, one: string, zero: string): number {
  const arr: string[] = s.split('');
  let count1 = 0;
  let count0 = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === one) {
      count1++;
    }
    if (arr[i] === zero) {
      count0++;
    }
  }

  return Math.abs(count0 - count1);
}
