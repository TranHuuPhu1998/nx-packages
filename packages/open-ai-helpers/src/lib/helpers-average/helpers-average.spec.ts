import { HelpersAverage } from './helpers-average';

describe('HelpersAverage', () => {
  it('should return the average of an array of numbers', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = 3;
    const result = HelpersAverage(...input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const input: number[] = [];
    expect(() => {
      HelpersAverage(...input);
    }).toThrow('Numbers not Unknown');
  });

  it('should handle arrays with only one number', () => {
    const input = [1];
    const expectedOutput = 1;
    const result = HelpersAverage(...input);
    expect(result).toEqual(expectedOutput);
  });
});
