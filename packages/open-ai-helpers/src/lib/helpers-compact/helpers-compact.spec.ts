import { compact } from './helpers-compact'

describe('compact', () => {
  it('should remove falsy values from an array', () => {
    const input = [0, 1, false, true, '', 'hello', null, undefined, NaN];
    const expectedOutput = [1, true, 'hello'];
    const result = compact(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    const result = compact(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an array with no falsy values', () => {
    const input = [1, 2, 3];
    const expectedOutput = [1, 2, 3];
    const result = compact(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an array of all falsy values', () => {
    const input = [false, 0, '', null, undefined, NaN];
    const expectedOutput: [] = [];
    const result = compact(input);
    expect(result).toEqual(expectedOutput);
  });
});
