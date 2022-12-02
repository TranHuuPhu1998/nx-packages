/**
 * @param  {number} bytes
 * @param  {TUnits} type
 * @param  {number} size
 * @returns boolean
 * @desc function check size of file
 */
export type TUnits = 'GB' | 'MB' | 'KB';

export function isCheckSize(
  bytes: number,
  unit: TUnits,
  size: number
): boolean {
  switch (unit) {
    case 'GB':
      return bytes / 1073741824 < size;
    case 'MB':
      return bytes / 1048576 < size;
    default:
      return bytes / 1024 < size;
  }
}
