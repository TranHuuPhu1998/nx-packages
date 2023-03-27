/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array<string>} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
export function HelpersWords(string = '', pattern?: RegExp | string): string[] {
  // Use the provided pattern to split the string into an array of words,
  // or use the default pattern if pattern is undefined.
  const regExp = pattern !== undefined ? pattern : /[\w]+/g;
  return string.match(regExp) || [];
}
