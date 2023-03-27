import { HelpersDeepFlatten } from './helpers-deep-flatten';

describe('HelpersDeepFlatten', () => {
  it('should flatten a nested array', () => {
    const arr = [1, 2, [3, [4, 5]], 6];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = HelpersDeepFlatten(arr);
    expect(result).toEqual(expected);
  });

  it('should return an empty array for an empty input', () => {
    const arr: Array<number> = [];
    const expected: Array<number> = [];
    const result = HelpersDeepFlatten(arr);
    expect(result).toEqual(expected);
  });

  it('should flatten an array of strings', () => {
    const arr = ['hello', ['world'], 'how', ['are', ['you']]];
    const expected = ['hello', 'world', 'how', 'are', 'you'];
    const result = HelpersDeepFlatten(arr);
    expect(result).toEqual(expected);
  });

  it('should flatten an array of objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, [{ c: 3 }, { d: 4 }]];
    const expected = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
    const result = HelpersDeepFlatten(arr);
    expect(result).toEqual(expected);
  });
});
