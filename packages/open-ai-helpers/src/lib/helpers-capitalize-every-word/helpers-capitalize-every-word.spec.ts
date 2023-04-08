import { capitalizeEveryWord } from './helpers-capitalize-every-word'

describe('capitalizeEveryWord', () => {
  it('should capitalize the first letter of every word in a string', () => {
    const input = 'hello world';
    const expectedOutput = 'Hello World';
    const result = capitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expectedOutput = '';
    const result = capitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with only one word', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = capitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with no lowercase letters', () => {
    const input = 'HELLO WORLD';
    const expectedOutput = 'HELLO WORLD';
    const result = capitalizeEveryWord(input);
    expect(result).toEqual(expectedOutput);
  });
});
