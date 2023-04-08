import { capitalize } from './helpers-capitalize';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = capitalize(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expectedOutput = '';
    const result = capitalize(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with only one letter', () => {
    const input = 'h';
    const expectedOutput = 'H';
    const result = capitalize(input);
    expect(result).toEqual(expectedOutput);
  });

});
