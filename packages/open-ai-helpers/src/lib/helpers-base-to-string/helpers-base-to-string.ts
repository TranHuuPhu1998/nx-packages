/**
 * Used as references for various `Number` constants.
 */
const INFINITY = 1 / 0;

/**
 * Used to convert symbols to primitives and strings.
 */
const symbolProto = Symbol ? Symbol.prototype : undefined;
const symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 *
 * @example
 * 
 * HelpersBaseToString(123); // => '123'
 * HelpersBaseToString('abc'); // => 'abc'
 * HelpersBaseToString(null); // => 'null'
 * HelpersBaseToString(undefined); // => 'undefined'
 * HelpersBaseToString(Infinity); // => 'Infinity'
 * HelpersBaseToString(-Infinity); // => '-Infinity'
 * HelpersBaseToString(NaN); // => 'NaN'
 * HelpersBaseToString(Symbol('foo')); // => 'Symbol(foo)'
 */
export function HelpersBaseToString<T>(value: T): string {
  // Check for null or undefined
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  // Check for Infinity, -Infinity, and NaN
  if (typeof value === 'number') {
    if (value === INFINITY) {
      return 'Infinity';
    }
    if (value === -INFINITY) {
      return '-Infinity';
    }
    if (isNaN(value)) {
      return 'NaN';
    }
  }
  // Check for Symbols
  if (typeof value === 'symbol') {
    return symbolToString ? symbolToString.call(value) : '';
  }
  // Convert other values to strings using the built-in `toString` method
  return '' + value;
}
