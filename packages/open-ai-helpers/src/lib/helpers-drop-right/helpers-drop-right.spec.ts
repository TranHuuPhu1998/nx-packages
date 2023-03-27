import { HelpersDropRight } from './helpers-drop-right'

describe('HelpersDropRight', () => {
  it('should drop the last element of an array', () => {
    const arr = [1, 2, 3, 4];
    const expected = [1, 2, 3];
    const result = HelpersDropRight(arr);
    expect(result).toEqual(expected);
  });

  it('should drop the last two elements of an array', () => {
    const arr = [1, 2, 3, 4];
    const expected = [1, 2];
    const result = HelpersDropRight(arr, 2);
    expect(result).toEqual(expected);
  });

  it('should return an empty array for an empty input', () => {
    const arr: [] = [];
    const expected: [] = [];
    const result = HelpersDropRight(arr);
    expect(result).toEqual(expected);
  });

  it('should throw an error for a negative n value', () => {
    const arr = [1, 2, 3, 4];
    expect(() => HelpersDropRight(arr, -1)).toThrow();
  });
});
