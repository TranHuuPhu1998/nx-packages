import { checkFalsy } from './helpers-check-falsy'

describe('checkFalsy', () => {
  it('should return true for falsy values', () => {
    expect(checkFalsy(0)).toBe(true);
    expect(checkFalsy('')).toBe(true);
    expect(checkFalsy(false)).toBe(true);
    expect(checkFalsy(undefined)).toBe(true);
    expect(checkFalsy(null)).toBe(true);
  });

  it('should return false for truthy values', () => {
    expect(checkFalsy(1)).toBe(false);
    expect(checkFalsy('abc')).toBe(false);
    expect(checkFalsy(true)).toBe(false);
    expect(checkFalsy({})).toBe(false);
  });
});
