import { HelpersDrop } from './helpers-drop-elements';

describe('HelpersDrop', () => {
  it('should drop the first element of an array', () => {
    const arr = [1, 2, 3, 4];
    const expected = [2, 3, 4];
    const result = HelpersDrop(arr);
    expect(result).toEqual(expected);
  });

  it('should drop the first two elements of an array', () => {
    const arr = [1, 2, 3, 4];
    const expected = [3, 4];
    const result = HelpersDrop(arr, 2);
    expect(result).toEqual(expected);
  });

  it('should return an empty array for an empty input', () => {
    const arr: [] = [];
    const expected: [] = [];
    const result = HelpersDrop(arr);
    expect(result).toEqual(expected);
  });

  it('should throw an error for a negative n value', () => {
    const arr = [1, 2, 3, 4];
    expect(() => HelpersDrop(arr, -1)).toThrow();
  });
});
