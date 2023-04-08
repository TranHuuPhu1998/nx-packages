import { baseToString } from './helpers-base-to-string'

describe('baseToString', () => {
  it('should return string "null" for null input', () => {
    expect(baseToString(null)).toBe('null');
  });

  it('should return string "undefined" for undefined input', () => {
    expect(baseToString(undefined)).toBe('undefined');
  });

  it('should return string representation of a boolean', () => {
    expect(baseToString(true)).toBe('true');
    expect(baseToString(false)).toBe('false');
  });

  it('should return string representation of a number', () => {
    expect(baseToString(123)).toBe('123');
    expect(baseToString(0)).toBe('0');
    expect(baseToString(-123.456)).toBe('-123.456');
    expect(baseToString(Infinity)).toBe('Infinity');
    expect(baseToString(-Infinity)).toBe('-Infinity');
    expect(baseToString(NaN)).toBe('NaN');
  });

  it('should return string representation of a string', () => {
    expect(baseToString('hello')).toBe('hello');
    expect(baseToString('')).toBe('');
    expect(baseToString(`test's string`)).toBe(`test's string`);
  });

  it('should return string representation of a symbol', () => {
    const sym = Symbol('foo');
    expect(baseToString(sym)).toBe(`Symbol(foo)`);
  });

  it('should return string representation of an object', () => {
    const obj = { a: 1, b: 'two' };
    expect(baseToString(obj)).toBe('[object Object]');
  });
});
