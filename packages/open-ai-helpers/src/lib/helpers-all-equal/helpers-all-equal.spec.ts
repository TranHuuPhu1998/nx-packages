import { HelpersAllEqual } from './helpers-all-equal';

describe('HelpersAllEqual check all elements are equal', () => {
  it('should work', () => {
    expect(HelpersAllEqual([1, 1, 1])).toEqual(true);
  });
});

describe('HelpersAllEqual check have one element are different', () => {
  it('should work', () => {
    expect(HelpersAllEqual([1, 2, 3])).toEqual(false);
  });
});

describe('HelpersAllEqual check have one element are different with element is string', () => {
  it('should work', () => {
    expect(HelpersAllEqual([1, '1', 1])).toEqual(false);
  });
});

describe('HelpersAllEqual check if array []', () => {
  it('should work', () => {
    expect(() => HelpersAllEqual([])).toThrowError('Array not Unknown');
  });
});
