import { HelpersBaseToString } from './helpers-base-to-string'

describe('HelpersBaseToString', () => {
  it('should return string "null" for null input', () => {
    expect(HelpersBaseToString(null)).toBe('null');
  });

  it('should return string "undefined" for undefined input', () => {
    expect(HelpersBaseToString(undefined)).toBe('undefined');
  });

  it('should return string representation of a boolean', () => {
    expect(HelpersBaseToString(true)).toBe('true');
    expect(HelpersBaseToString(false)).toBe('false');
  });

  it('should return string representation of a number', () => {
    expect(HelpersBaseToString(123)).toBe('123');
    expect(HelpersBaseToString(0)).toBe('0');
    expect(HelpersBaseToString(-123.456)).toBe('-123.456');
    expect(HelpersBaseToString(Infinity)).toBe('Infinity');
    expect(HelpersBaseToString(-Infinity)).toBe('-Infinity');
    expect(HelpersBaseToString(NaN)).toBe('NaN');
  });

  it('should return string representation of a string', () => {
    expect(HelpersBaseToString('hello')).toBe('hello');
    expect(HelpersBaseToString('')).toBe('');
    expect(HelpersBaseToString(`test's string`)).toBe(`test's string`);
  });

  it('should return string representation of a symbol', () => {
    const sym = Symbol('foo');
    expect(HelpersBaseToString(sym)).toBe(`Symbol(foo)`);
  });

  it('should return string representation of an object', () => {
    const obj = { a: 1, b: 'two' };
    expect(HelpersBaseToString(obj)).toBe('[object Object]');
  });
});
