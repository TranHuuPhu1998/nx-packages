/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param object The source object.
 * @param paths The property paths to pick.
 * @returns Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
export function pick<T extends object, K extends keyof T>(
  object: T,
  ...paths: Array<K | Array<K>>
): Pick<T, K> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  paths.forEach((path) => {
    if (Array.isArray(path)) {
      path.forEach((p) => {
        result[p] = object[p];
      });
    } else {
      result[path] = object[path];
    }
  });
  return result;
}
