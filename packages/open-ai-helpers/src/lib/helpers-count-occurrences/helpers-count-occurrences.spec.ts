import { countOccurrences } from './helpers-count-occurrences'

describe('countOccurrences', () => {
  it('should count the number of occurrences of a value in an array', () => {
    const arr = [1, 2, 3, 2, 2, 4, 2, 5];
    const val = 2;
    const result = countOccurrences(arr, val);
    expect(result).toBe(4);
  });

  it('should return 0 when the value is not in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const val = 6;
    const result = countOccurrences(arr, val);
    expect(result).toBe(0);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    const val = 1;
    const result = countOccurrences(arr, val);
    expect(result).toBe(0);
  });
});
