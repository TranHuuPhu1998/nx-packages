/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */
export function HelpersGroupBy<T>(
  collection: Array<T> | Record<string, T>,
  iteratee: (value: T) => number | string
): Record<string, Array<T>> {
  return Object.entries(collection).reduce((result, [, value]) => {
    const groupKey = iteratee(value);
    if (groupKey in result) {
      result[groupKey].push(value);
    } else {
      result[groupKey] = [value];
    }
    return result;
  }, {} as Record<string, Array<T>>);
}
