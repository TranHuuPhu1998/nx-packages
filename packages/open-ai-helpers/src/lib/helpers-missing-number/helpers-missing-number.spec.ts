import { HelperMissingNumber } from './helpers-missing-number'

describe("HelperMissingNumber", () => {
  it("returns the missing number when input is valid", () => {
    expect(HelperMissingNumber([1, 2, 4])).toBe(3);
    expect(HelperMissingNumber([2, 3, 5, 1])).toBe(4);
    expect(HelperMissingNumber([1])).toBe(2);
    expect(HelperMissingNumber([5, 4, 3, 2, 1, 7, 6, 8, 10])).toBe(9);
  });

  it("throws an error when input array is too short", () => {
    expect(() => HelperMissingNumber([])).toThrow("Invalid input: array length must be between 1 and 100000");
  });

  it("throws an error when input array is too long", () => {
    const arr = Array.from({ length: 100001 }, (_, i) => i + 1);
    expect(() => HelperMissingNumber(arr)).toThrow("Invalid input: array length must be between 1 and 100000");
  });

  it("throws an error when input array contains invalid elements", () => {
    expect(() => HelperMissingNumber([0, 1, 2])).toThrow("Invalid input: array elements must be between 1 and n+1");
  });

});
