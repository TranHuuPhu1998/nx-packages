import { HelpersToCurrency } from './helpers-to-currency'

describe("HelpersToCurrency", () => {
  it("should format number to currency with default language format", () => {
    const result = HelpersToCurrency(1000.5, "USD");
    expect(result).toEqual("$1,000.50");
  });

  it("should format negative number to currency", () => {
    const result = HelpersToCurrency(-1000.5, "USD");
    expect(result).toEqual("-$1,000.50");
  });

  it("should format zero to currency", () => {
    const result = HelpersToCurrency(0, "USD");
    expect(result).toEqual("$0.00");
  });
});