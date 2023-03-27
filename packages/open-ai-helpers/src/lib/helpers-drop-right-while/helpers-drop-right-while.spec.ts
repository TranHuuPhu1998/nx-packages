import { HelpersDropRightWhile } from './helpers-drop-right-while'

describe('HelpersDropRightWhile', () => {
  it('returns the original array if all elements satisfy the function', () => {
    const arr = [1, 2, 3, 4];
    const func = (n: number) => n < 5;
    expect(HelpersDropRightWhile(arr, func)).toEqual(arr);
  });

  it('returns an empty array if all elements do not satisfy the function', () => {
    const arr = [1, 2, 3, 4];
    const func = (n: number) => n > 5;
    expect(HelpersDropRightWhile(arr, func)).toEqual([]);
  });

  it('returns a new array with elements removed from the end that do not satisfy the function', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const func = (n: number) => n < 5;
    expect(HelpersDropRightWhile(arr, func)).toEqual([1, 2, 3, 4]);
  });

  it('returns an empty array when called on an empty array', () => {
    const arr: number[] = [];
    const func = (n: number) => n < 5;
    expect(HelpersDropRightWhile(arr, func)).toEqual([]);
  });
});
