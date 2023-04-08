/**
 * Capitalizes the first letter of every word in a string.
 * @param str - The string to capitalize.
 * @returns A new string with the first letter of every word capitalized.
 */

export function capitalizeEveryWord(str: string): string {
  return str.replace(/\b[a-z]/g, (char: string) => char.toUpperCase());
}