import { HelpersGroupBy } from './helpers-group-by';

describe('HelpersGroupBy', () => {
  it('should group elements of an array by the result of the iteratee function', () => {
    const arr = [6.1, 4.2, 6.3];
    const result = HelpersGroupBy(arr, Math.floor);

    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group elements of an object by the result of the iteratee function', () => {
    const obj = { 'a': 6.1, 'b': 4.2, 'c': 6.3 };
    const result = HelpersGroupBy(obj, Math.floor);

    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should handle an empty array', () => {
    const arr: [] = [];
    const result = HelpersGroupBy(arr, Math.floor);

    expect(result).toEqual({});
  });

  it('should handle an empty object', () => {
    const obj = {};
    const result = HelpersGroupBy(obj, Math.floor);

    expect(result).toEqual({});
  });
});
