/**
 * Checks whether a given value is a valid date.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} Returns true if the value is a valid date, false otherwise.
 *
 * @example
 * // Valid date case
 * HelperIsValidDate(new Date()); // true
 *
 * // Invalid date case
 * HelperIsValidDate("abc"); // false
 */
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value as unknown as number);
}
