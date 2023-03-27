import { HelperValidateNumber } from './helpers-validate-number'

describe("HelperValidateNumber function", () => {
  test("should return true for valid numbers", () => {
    expect(HelperValidateNumber(0)).toBe(true);
    expect(HelperValidateNumber(1)).toBe(true);
    expect(HelperValidateNumber(-1)).toBe(true);
    expect(HelperValidateNumber(3.14)).toBe(true);
    expect(HelperValidateNumber(-3.14)).toBe(true);
    expect(HelperValidateNumber("3.14")).toBe(true);
    expect(HelperValidateNumber("-3.14")).toBe(true);
  });

  test("should return false for invalid numbers", () => {
    expect(HelperValidateNumber("abc")).toBe(false);
    expect(HelperValidateNumber('null')).toBe(false);
    expect(HelperValidateNumber('undefined')).toBe(false);
    expect(HelperValidateNumber(NaN)).toBe(false);
    expect(HelperValidateNumber(Number.POSITIVE_INFINITY)).toBe(false);
    expect(HelperValidateNumber(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});
