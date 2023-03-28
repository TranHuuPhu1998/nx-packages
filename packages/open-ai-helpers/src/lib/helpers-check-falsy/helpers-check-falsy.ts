/**
 * Checks whether a value is falsy or not.
 * @param value The value to be checked.
 * @returns Returns `true` if the value is falsy, otherwise `false`.
 * @example
 * checkFalsy(0); // true
 * checkFalsy(''); // true
 * checkFalsy(false); // true
 * checkFalsy(undefined); // true
 * checkFalsy(null); // true
 * checkFalsy(1); // false
 * checkFalsy('abc'); // false
 * checkFalsy(true); // false
 * checkFalsy({}); // false
 */
export function HelpersCheckFalsy(value: unknown): boolean {
  return !value;
}
