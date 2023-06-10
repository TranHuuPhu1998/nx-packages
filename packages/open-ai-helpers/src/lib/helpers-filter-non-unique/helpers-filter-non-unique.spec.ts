import { filterNonUnique } from './helpers-filter-non-unique'

describe('filterNonUnique', () => {
  it('should return an empty array when given an empty array', () => {
    expect(filterNonUnique([])).toEqual([]);
  });

  it('should return an array with only unique elements', () => {
    const input = [1, 2, 2, 'hello', 'world', 'hello'];
    const expectedOutput = [1, 'world'];

    expect(filterNonUnique(input)).toEqual(expectedOutput);
  });

  it('should handle arrays with only non-unique elements', () => {
    const input = [1, 1, 'hello', 'hello'];

    expect(filterNonUnique(input)).toEqual([]);
  });

  it('should handle arrays with only unique elements', () => {
    const input = [1, 'hello', true];
    const expectedOutput = [1, 'hello', true];

    expect(filterNonUnique(input)).toEqual(expectedOutput);
  });
});
