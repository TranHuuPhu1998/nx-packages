import { indexOfAll } from './helpers-index-of-all'

describe("indexOfAll", () => {
  it("should return an array of indices where the value is found in the input array", () => {
    expect(indexOfAll([1, 2, 3, 4, 1], 1)).toEqual([0, 4]);
    expect(indexOfAll(["a", "b", "a", "c", "d", "a"], "a")).toEqual([0, 2, 5]);
    expect(indexOfAll([true, false, true, false, true], true)).toEqual([0, 2, 4]);
  });

  it("should return an empty array if the value is not found in the input array", () => {
    expect(indexOfAll([1, 2, 3, 4], 5)).toEqual([]);
    expect(indexOfAll(["a", "b", "c"], "d")).toEqual([]);
  });
});
