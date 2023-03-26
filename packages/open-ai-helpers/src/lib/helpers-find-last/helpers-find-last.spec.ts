import { HelpersFindLast } from './helpers-find-last'

describe('HelpersFindLast', () => {
  it('should return undefined when no element in the array satisfies the testing function', () => {
    const input = [1, 2, 3, 4, 5];
    const fn = (elem: number) => elem > 5;

    expect(HelpersFindLast(input, fn)).toBeUndefined();
  });

  it('should return the last element in the array that satisfies the testing function', () => {
    const input = [1, 2, 3, 4, 5];
    const fn = (elem: number) => elem % 2 === 0;

    expect(HelpersFindLast(input, fn)).toBe(4);
  });

  it('should return the last element in the array that satisfies the testing function, even if it is the first element in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const fn = (elem: number) => elem === 1;

    expect(HelpersFindLast(input, fn)).toBe(1);
  });

  it('should return the last element in the array that satisfies the testing function, even if there are duplicates of that element', () => {
    const input = [1, 2, 3, 4, 5, 5];
    const fn = (elem: number) => elem === 5;

    expect(HelpersFindLast(input, fn)).toBe(5);
  });
});
