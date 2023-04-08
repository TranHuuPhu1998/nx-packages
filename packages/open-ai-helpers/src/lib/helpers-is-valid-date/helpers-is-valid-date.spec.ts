import { isValidDate } from './helpers-is-valid-date';

describe("isValidDate", () => {
  it("should return true when given a valid date object", () => {
    const validDate = new Date("2022-01-01");
    expect(isValidDate(validDate)).toBe(true);
  });

  it("should return false when given an invalid date object", () => {
    const invalidDate = new Date("not a date");
    expect(isValidDate(invalidDate)).toBe(false);
  });

  it("should return false when given a non-date value", () => {
    expect(isValidDate("not a date")).toBe(false);
    expect(isValidDate(42)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate([])).toBe(false);
  });
});
