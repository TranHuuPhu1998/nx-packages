import { toCurrency } from './helpers-to-currency'

describe("toCurrency", () => {
  it("should format number to currency with default language format", () => {
    const result = toCurrency(1000.5, "USD");
    expect(result).toEqual("$1,000.50");
  });

  it("should format negative number to currency", () => {
    const result = toCurrency(-1000.5, "USD");
    expect(result).toEqual("-$1,000.50");
  });

  it("should format zero to currency", () => {
    const result = toCurrency(0, "USD");
    expect(result).toEqual("$0.00");
  });
});