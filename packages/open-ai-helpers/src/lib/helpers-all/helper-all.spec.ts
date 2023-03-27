import { HelpersAll } from './helper-all';

describe('HelpersAll check array greater 1', () => {
  it('should work', () => {
    expect(HelpersAll([4, 2, 3], x => x > 1)).toEqual(true);
  });
});

describe('HelpersAll check array return true if no fn', () => {
  it('should work', () => {
    expect(HelpersAll([4, 2, 3])).toEqual(true);
  });
});

describe('HelpersAll check if array greater 1 then return false', () => {
  it('should work', () => {
    expect(HelpersAll([4, 2, 3], x => x < 1)).toEqual(false);
  });
});

describe('HelpersAll check if array [] return message', () => {
  it('should work', () => {
    expect(() => HelpersAll([], () => true)).toThrowError('Array not Unknown');
  });
});
