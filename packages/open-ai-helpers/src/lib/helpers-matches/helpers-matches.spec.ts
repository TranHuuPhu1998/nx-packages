import { HelpersMatches } from "./helpers-matches";

describe("HelpersMatches", () => {
  it("should return true if the object matches the source object", () => {
    const obj = { a: 1, b: "hello", c: true };
    expect(HelpersMatches(obj, { a: 1, c: true })).toBe(true);
  });

  it("should return false if the object does not match the source object", () => {
    const obj = { a: 1, b: "hello", c: true };
    expect(HelpersMatches(obj, { a: 1, c: false })).toBe(false);
  });
});
