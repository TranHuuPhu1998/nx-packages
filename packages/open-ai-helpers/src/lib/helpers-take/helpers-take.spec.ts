import { take } from "./helpers-take";

describe("take", () => {
  it("should return the first n elements of an array", () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
    expect(take(["a", "b", "c"], 3)).toEqual(["a", "b", "c"]);
    expect(take([true, false, true], 1)).toEqual([true]);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(take([], 2)).toEqual([]);
  });

  it("should return an array containing the first element of the input array if n is not specified", () => {
    expect(take([1, 2, 3])).toEqual([1]);
    expect(take(["a", "b", "c"])).toEqual(["a"]);
    expect(take([true, false, true])).toEqual([true]);
  });
});
