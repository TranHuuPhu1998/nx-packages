/**
 * Checks if a string is valid JSON
 * @param str - The string to check
 * @returns A boolean indicating whether the input string is valid JSON
 */

export const isValidJSON = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
