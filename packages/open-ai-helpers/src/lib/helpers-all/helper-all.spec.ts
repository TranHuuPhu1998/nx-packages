import { all } from './helper-all';

describe('all check array greater 1', () => {
  it('should work', () => {
    expect(all([4, 2, 3], x => x > 1)).toEqual(true);
  });
});

describe('all check array return true if no fn', () => {
  it('should work', () => {
    expect(all([4, 2, 3])).toEqual(true);
  });
});

describe('all check if array greater 1 then return false', () => {
  it('should work', () => {
    expect(all([4, 2, 3], x => x < 1)).toEqual(false);
  });
});

describe('all check if array [] return message', () => {
  it('should work', () => {
    expect(() => all([], () => true)).toThrowError('Array not Unknown');
  });
});
