import { HelpersAverageBy } from './helpers-average-by';

describe('HelpersAverageBy', () => {
  it('calculates the average of an array of numbers', () => {
    const arr = [1, 2, 3, 4];
    const result = HelpersAverageBy(arr, val => val);
    expect(result).toBe(2.5);
  });

  it('calculates the average of an array of objects by a property', () => {
    const arr = [
      { name: 'John', age: 25 },
      { name: 'Mary', age: 30 },
      { name: 'Peter', age: 35 },
    ];
    const result = HelpersAverageBy(arr, 'age');
    expect(result).toBe(30);
  });
});
