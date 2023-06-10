import { missingNumber } from './helpers-missing-number'

describe("missingNumber", () => {
  it("returns the missing number when input is valid", () => {
    expect(missingNumber([1, 2, 4])).toBe(3);
    expect(missingNumber([2, 3, 5, 1])).toBe(4);
    expect(missingNumber([1])).toBe(2);
    expect(missingNumber([5, 4, 3, 2, 1, 7, 6, 8, 10])).toBe(9);
  });

  it("throws an error when input array is too short", () => {
    expect(() => missingNumber([])).toThrow("Invalid input: array length must be between 1 and 100000");
  });

  it("throws an error when input array is too long", () => {
    const arr = Array.from({ length: 100001 }, (_, i) => i + 1);
    expect(() => missingNumber(arr)).toThrow("Invalid input: array length must be between 1 and 100000");
  });

  it("throws an error when input array contains invalid elements", () => {
    expect(() => missingNumber([0, 1, 2])).toThrow("Invalid input: array elements must be between 1 and n+1");
  });

});
