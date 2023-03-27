import { HelpersIndexOfAll } from './helpers-index-of-all'

describe("HelpersIndexOfAll", () => {
  it("should return an array of indices where the value is found in the input array", () => {
    expect(HelpersIndexOfAll([1, 2, 3, 4, 1], 1)).toEqual([0, 4]);
    expect(HelpersIndexOfAll(["a", "b", "a", "c", "d", "a"], "a")).toEqual([0, 2, 5]);
    expect(HelpersIndexOfAll([true, false, true, false, true], true)).toEqual([0, 2, 4]);
  });

  it("should return an empty array if the value is not found in the input array", () => {
    expect(HelpersIndexOfAll([1, 2, 3, 4], 5)).toEqual([]);
    expect(HelpersIndexOfAll(["a", "b", "c"], "d")).toEqual([]);
  });
});
