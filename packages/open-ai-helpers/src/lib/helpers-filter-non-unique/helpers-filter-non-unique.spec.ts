import { HelpersFilterNonUnique } from './helpers-filter-non-unique'

describe('HelpersFilterNonUnique', () => {
  it('should return an empty array when given an empty array', () => {
    expect(HelpersFilterNonUnique([])).toEqual([]);
  });

  it('should return an array with only unique elements', () => {
    const input = [1, 2, 2, 'hello', 'world', 'hello'];
    const expectedOutput = [1, 'world'];

    expect(HelpersFilterNonUnique(input)).toEqual(expectedOutput);
  });

  it('should handle arrays with only non-unique elements', () => {
    const input = [1, 1, 'hello', 'hello'];

    expect(HelpersFilterNonUnique(input)).toEqual([]);
  });

  it('should handle arrays with only unique elements', () => {
    const input = [1, 'hello', true];
    const expectedOutput = [1, 'hello', true];

    expect(HelpersFilterNonUnique(input)).toEqual(expectedOutput);
  });
});
