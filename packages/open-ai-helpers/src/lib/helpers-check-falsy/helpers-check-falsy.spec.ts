import { HelpersCheckFalsy } from './helpers-check-falsy'

describe('HelpersCheckFalsy', () => {
  it('should return true for falsy values', () => {
    expect(HelpersCheckFalsy(0)).toBe(true);
    expect(HelpersCheckFalsy('')).toBe(true);
    expect(HelpersCheckFalsy(false)).toBe(true);
    expect(HelpersCheckFalsy(undefined)).toBe(true);
    expect(HelpersCheckFalsy(null)).toBe(true);
  });

  it('should return false for truthy values', () => {
    expect(HelpersCheckFalsy(1)).toBe(false);
    expect(HelpersCheckFalsy('abc')).toBe(false);
    expect(HelpersCheckFalsy(true)).toBe(false);
    expect(HelpersCheckFalsy({})).toBe(false);
  });
});
