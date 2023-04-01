import { helperIsEmpty } from './helpers-is-empty'

describe('helperIsEmpty', () => {
  it('null should return true', () => {
    expect(helperIsEmpty(null)).toBe(true);
  });

  it('true should return true', () => {
    expect(helperIsEmpty(true)).toBe(true);
  });

  it('1 should return true', () => {
    expect(helperIsEmpty(1)).toBe(true);
  });

  it('[1, 2, 3] should return false', () => {
    expect(helperIsEmpty([1, 2, 3])).toBe(false);
  });

  it('"abc" should return false', () => {
    expect(helperIsEmpty('abc')).toBe(false);
  });

  it('{ "a": 1 } should return false', () => {
    expect(helperIsEmpty({ a: 1 })).toBe(false);
  });

  it('new Map() should return true', () => {
    expect(helperIsEmpty(new Map())).toBe(true);
  });

  it('new Set() should return true', () => {
    expect(helperIsEmpty(new Set())).toBe(true);
  });

  it('new Map([[1, "one"]]) should return false', () => {
    expect(helperIsEmpty(new Map([[1, 'one']]))).toBe(false);
  });

  it('new Set([1, 2, 3]) should return true', () => {
    expect(helperIsEmpty(new Set([1, 2, 3]))).toBe(true);
  });
});
