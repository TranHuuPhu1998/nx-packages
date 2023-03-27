import { HelpersCapitalize } from './helpers-capitalize';

describe('HelpersCapitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = HelpersCapitalize(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expectedOutput = '';
    const result = HelpersCapitalize(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with only one letter', () => {
    const input = 'h';
    const expectedOutput = 'H';
    const result = HelpersCapitalize(input);
    expect(result).toEqual(expectedOutput);
  });

});
