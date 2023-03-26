import { HelpersCapitalizeEveryWord } from './helpers-capitalize-every-word'

describe('HelpersCapitalizeEveryWord', () => {
  it('should capitalize the first letter of every word in a string', () => {
    const input = 'hello world';
    const expectedOutput = 'Hello World';
    const result = HelpersCapitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expectedOutput = '';
    const result = HelpersCapitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with only one word', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = HelpersCapitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with no lowercase letters', () => {
    const input = 'HELLO WORLD';
    const expectedOutput = 'HELLO WORLD';
    const result = HelpersCapitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });
});
