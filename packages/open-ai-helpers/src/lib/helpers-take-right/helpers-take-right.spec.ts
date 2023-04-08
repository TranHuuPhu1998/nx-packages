import { takeRight } from "./helpers-take-right";

describe("takeRight", () => {
  it("should return the last n elements of the given array", () => {
    expect(takeRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    expect(takeRight(["a", "b", "c", "d"], 2)).toEqual(["c", "d"]);
    expect(takeRight([{ name: "John" }, { name: "Jane" }, { name: "Bob" }])).toEqual([{ name: "Bob" }]);
  });

  it("should return an empty array if n is 0", () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
    expect(takeRight(["a", "b"], 0)).toEqual([]);
    expect(takeRight([{ name: "John" }], 0)).toEqual([]);
  });

  it("should return the last element of the given array if n is greater than the length of the array", () => {
    expect(takeRight([{ name: "John" }], 2)).toEqual([{ name: "John" }]);
  });
});
