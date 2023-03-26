import { HelperTake } from "./helpers-take";

describe("HelperTake", () => {
  it("should return the first n elements of an array", () => {
    expect(HelperTake([1, 2, 3], 2)).toEqual([1, 2]);
    expect(HelperTake(["a", "b", "c"], 3)).toEqual(["a", "b", "c"]);
    expect(HelperTake([true, false, true], 1)).toEqual([true]);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(HelperTake([], 2)).toEqual([]);
  });

  it("should return an array containing the first element of the input array if n is not specified", () => {
    expect(HelperTake([1, 2, 3])).toEqual([1]);
    expect(HelperTake(["a", "b", "c"])).toEqual(["a"]);
    expect(HelperTake([true, false, true])).toEqual([true]);
  });
});
