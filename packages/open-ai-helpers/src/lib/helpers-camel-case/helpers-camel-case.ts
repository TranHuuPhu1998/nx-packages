/**
 * Converts a string to camel case.
 * @param str The string to convert.
 * @returns The camel cased string.
 *
 * @example
 * ```
 * const string1 = 'Foo Bar';
 * const string2 = '--foo-bar--';
 * const string3 = '__FOO_BAR__';
 *
 * const result1 = camelCase(string1);
 * const result2 = camelCase(string2);
 * const result3 = camelCase(string3);
 *
 * console.log(result1); // Output: 'fooBar'
 * console.log(result2); // Output: 'fooBar'
 * console.log(result3); // Output: 'fooBar'
 * ```
 */
export function HelpersCamelCase(str = ''): string {
  return str.trim()
    .replace(/[_-]+/g, ' ')
    .split(' ')
    .map((word, index) => {
      const firstLetter = word.charAt(0)
      const isFirstWord = index === 0
      const restLetters = word.slice(1)
      return isFirstWord
        ? firstLetter.toLowerCase() + restLetters
        : firstLetter.toUpperCase() + restLetters
    })
    .join('')
}