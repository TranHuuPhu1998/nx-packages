/**
 * Checks if a given value is a valid number.
 *
 * @param {string | number} - The value to check.
 * @returns Returns `true` if the given value is a valid number, else `false`.
 * @example
 * ```typescript
 * validateNumber(3) // true
 * validateNumber('3') // true
 * validateNumber('3.14') // true
 * validateNumber('hello') // false
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HelperValidateNumber(n: string | number): boolean {
  const parsedNumber = parseFloat(n.toString().replace(/,/g, ''));
  return !isNaN(parsedNumber) && isFinite(parsedNumber) && Number(n) == parsedNumber;
}
