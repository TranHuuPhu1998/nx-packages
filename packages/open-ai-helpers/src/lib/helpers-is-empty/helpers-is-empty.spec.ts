import { isEmpty } from './helpers-is-empty'

describe('isEmpty', () => {
  it('null should return true', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('true should return true', () => {
    expect(isEmpty(true)).toBe(false);
  });

  it('1 should return false', () => {
    expect(isEmpty(1)).toBe(false);
  });

  it('[1, 2, 3] should return false', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('"abc" should return false', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  it('{ "a": 1 } should return false', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('new Set([1, 2, 3]) should return true', () => {
    expect(isEmpty(new Set([1, 2, 3]))).toBe(true);
  });
});
