import { HelpersAverage } from './helpers-average';

describe('HelpersAll check input: [1, 2, 3] => expected: 2', () => {
  it('should work', () => {
    expect(HelpersAverage(...[1, 2, 3])).toEqual(2);
  });
});

describe('HelpersAll check input: 1, 2, 3 => expected: 2', () => {
  it('should work', () => {
    expect(HelpersAverage(1, 2, 3)).toEqual(2);
  });
});

describe('HelpersAll check input: ...[1, 2, 3, 4] => expected: 2.5', () => {
  it('should work', () => {
    expect(HelpersAverage(...[1, 2, 3, 4])).toEqual(2.5);
  });
});

describe('HelpersAll check if array [] => throw error', () => {
  it('should work', () => {
    expect(() => HelpersAverage()).toThrowError('Numbers not Unknown');
  });
});
