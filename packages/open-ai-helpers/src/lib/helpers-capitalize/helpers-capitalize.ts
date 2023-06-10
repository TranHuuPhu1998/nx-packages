/**
 * Capitalizes the first letter of a string.
 * @param first - The string to capitalize.
 * @returns A new string with the first letter capitalized.
 * @throws {Error} If the first parameter is not a string.
 */

export function capitalize(first: string): string {
  if (typeof first !== 'string') {
    throw new Error('First not Unknown');
  }

  return first.charAt(0).toUpperCase() + first.slice(1);
};
