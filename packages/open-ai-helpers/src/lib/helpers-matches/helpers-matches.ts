/**
 * Check if an object matches a source object, i.e., it has all the same properties and their values match.
 * @param obj - The object to check.
 * @param source - The source object to match against.
 * @returns `true` if the object matches the source object, `false` otherwise.
 */

export function matches(obj: Record<string, unknown>, source: Record<string, unknown>): boolean {
  return Object.keys(source).every
    ((key) =>
      Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === source[key]
    );
}
