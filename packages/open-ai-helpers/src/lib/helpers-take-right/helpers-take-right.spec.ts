import { HelperTakeRight } from "./helpers-take-right";

describe("HelperTakeRight", () => {
  it("should return the last n elements of the given array", () => {
    expect(HelperTakeRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    expect(HelperTakeRight(["a", "b", "c", "d"], 2)).toEqual(["c", "d"]);
    expect(HelperTakeRight([{ name: "John" }, { name: "Jane" }, { name: "Bob" }])).toEqual([{ name: "Bob" }]);
  });

  it("should return an empty array if n is 0", () => {
    expect(HelperTakeRight([1, 2, 3], 0)).toEqual([]);
    expect(HelperTakeRight(["a", "b"], 0)).toEqual([]);
    expect(HelperTakeRight([{ name: "John" }], 0)).toEqual([]);
  });

  it("should return the last element of the given array if n is greater than the length of the array", () => {
    expect(HelperTakeRight([{ name: "John" }], 2)).toEqual([{ name: "John" }]);
  });
});
