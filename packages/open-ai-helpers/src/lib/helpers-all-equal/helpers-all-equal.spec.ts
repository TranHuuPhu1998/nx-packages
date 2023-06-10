import { allEqual } from './helpers-all-equal';

describe('allEqual check all elements are equal', () => {
  it('should work', () => {
    expect(allEqual([1, 1, 1])).toEqual(true);
  });
});

describe('allEqual check have one element are different', () => {
  it('should work', () => {
    expect(allEqual([1, 2, 3])).toEqual(false);
  });
});

describe('allEqual check have one element are different with element is string', () => {
  it('should work', () => {
    expect(allEqual([1, '1', 1])).toEqual(false);
  });
});

describe('allEqual check if array []', () => {
  it('should work', () => {
    expect(() => allEqual([])).toThrowError('Array not Unknown');
  });
});
