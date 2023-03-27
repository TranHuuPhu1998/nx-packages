import { HelpersIsValidJSON } from "./helpers-is-valid-json";

describe("HelpersIsValidJSON", () => {
  it("should return true if the input is valid JSON", () => {
    expect(HelpersIsValidJSON('{"name":"John","age":30,"city":"New York"}')).toBe(true);
    expect(HelpersIsValidJSON("[1,2,3]")).toBe(true);
    expect(HelpersIsValidJSON('{"name":"John","age":30,"city":"New York","hobbies":["reading","swimming"]}')).toBe(true);
  });

  it("should return false if the input is not valid JSON", () => {
    expect(HelpersIsValidJSON('{"name":"John","age":30,"city":"New York"')).toBe(false);
    expect(HelpersIsValidJSON("{name:John, age:30, city:New York}")).toBe(false);
    expect(HelpersIsValidJSON("Hello, world!")).toBe(false);
  });
});
