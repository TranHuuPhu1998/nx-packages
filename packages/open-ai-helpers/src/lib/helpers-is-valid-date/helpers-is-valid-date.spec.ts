import { HelperIsValidDate } from './helpers-is-valid-date';

describe("HelperIsValidDate", () => {
  it("should return true when given a valid date object", () => {
    const validDate = new Date("2022-01-01");
    expect(HelperIsValidDate(validDate)).toBe(true);
  });

  it("should return false when given an invalid date object", () => {
    const invalidDate = new Date("not a date");
    expect(HelperIsValidDate(invalidDate)).toBe(false);
  });

  it("should return false when given a non-date value", () => {
    expect(HelperIsValidDate("not a date")).toBe(false);
    expect(HelperIsValidDate(42)).toBe(false);
    expect(HelperIsValidDate(undefined)).toBe(false);
    expect(HelperIsValidDate(null)).toBe(false);
    expect(HelperIsValidDate({})).toBe(false);
    expect(HelperIsValidDate([])).toBe(false);
  });
});
