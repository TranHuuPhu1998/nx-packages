import { validateNumber } from './helpers-validate-number'

describe("validateNumber function", () => {
  test("should return true for valid numbers", () => {
    expect(validateNumber(0)).toBe(true);
    expect(validateNumber(1)).toBe(true);
    expect(validateNumber(-1)).toBe(true);
    expect(validateNumber(3.14)).toBe(true);
    expect(validateNumber(-3.14)).toBe(true);
    expect(validateNumber("3.14")).toBe(true);
    expect(validateNumber("-3.14")).toBe(true);
  });

  test("should return false for invalid numbers", () => {
    expect(validateNumber("abc")).toBe(false);
    expect(validateNumber('null')).toBe(false);
    expect(validateNumber('undefined')).toBe(false);
    expect(validateNumber(NaN)).toBe(false);
    expect(validateNumber(Number.POSITIVE_INFINITY)).toBe(false);
    expect(validateNumber(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});
