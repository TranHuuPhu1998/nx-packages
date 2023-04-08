import { isValidJSON } from "./helpers-is-valid-json";

describe("isValidJSON", () => {
  it("should return true if the input is valid JSON", () => {
    expect(isValidJSON('{"name":"John","age":30,"city":"New York"}')).toBe(true);
    expect(isValidJSON("[1,2,3]")).toBe(true);
    expect(isValidJSON('{"name":"John","age":30,"city":"New York","hobbies":["reading","swimming"]}')).toBe(true);
  });

  it("should return false if the input is not valid JSON", () => {
    expect(isValidJSON('{"name":"John","age":30,"city":"New York"')).toBe(false);
    expect(isValidJSON("{name:John, age:30, city:New York}")).toBe(false);
    expect(isValidJSON("Hello, world!")).toBe(false);
  });
});
