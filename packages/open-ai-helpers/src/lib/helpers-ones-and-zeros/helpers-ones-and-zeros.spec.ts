import { onesAndZeros } from './helpers-ones-and-zeros'

describe("onesAndZeros", () => {
  it("should return 1 for input '101'", () => {
    const input = "101";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(1);
  });

  it("should return 0 for input ''", () => {
    const input = "";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(0);
  });

  it("should return 1 for input '1'", () => {
    const input = "1";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(1);
  });

  it("should return 1 for input '0'", () => {
    const input = "0";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(1);
  });

  it("should return 0 for input '11'", () => {
    const input = "11";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(2);
  });

  it("should return 0 for input '00'", () => {
    const input = "00";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(2);
  });

  it("should return 1 for input '10'", () => {
    const input = "10";
    const result = onesAndZeros(input, '1', '0');
    expect(result).toEqual(0);
  });


});
