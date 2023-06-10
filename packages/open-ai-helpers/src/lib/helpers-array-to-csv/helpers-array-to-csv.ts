/**
 * Converts an array of arrays to a CSV string.
 * @param arr The input array containing the data arrays to be converted.
 * @param delimiter The character used to separate fields in the CSV string.
 * @returns A CSV string created from the input arrays.
 * @throws If arr is not an array or doesn't contain any elements.
 */

export function arrayToCSV<T extends Array<string>>(arr: T[], delimiter = ','): string {

  if (typeof arr !== 'object' || !Array.isArray(arr) || arr.length <= 0) {
    throw new Error('Array is not defined');
  }

  return arr.map((v: string[]) => v.map((x: string) => `"${x}"`).join(delimiter)).join('\n');
}
