/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * helperIsEmpty(null);
 * // => true
 *
 * helperIsEmpty(true);
 * // => true
 *
 * helperIsEmpty(1);
 * // => true
 *
 * helperIsEmpty([1, 2, 3]);
 * // => false
 *
 * helperIsEmpty('abc');
 * // => false
 *
 * helperIsEmpty({ 'a': 1 });
 * // => false
 */
export function isEmpty(value: unknown): boolean {
  if (value == null) {
    return true;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  if (typeof (value as { length: number }).length === 'number' && (value as { length: number }).length === 0) {
    return true;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return false;
}
