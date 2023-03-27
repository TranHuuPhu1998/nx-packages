import { HelpersCamelCase } from './helpers-camel-case';

describe('HelpersCamelCase', () => {
  it('should convert space-separated string to camel case', () => {
    const input = 'foo bar';
    const expectedOutput = 'fooBar';
    expect(HelpersCamelCase(input)).toEqual(expectedOutput);
  });

  it('should convert hyphen-separated string to camel case', () => {
    const input = '--foo-bar--';
    const expectedOutput = 'FooBar';
    expect(HelpersCamelCase(input)).toEqual(expectedOutput);
  });

  it('should convert underscore-separated string to camel case', () => {
    const input = '__FOO_BAR__';
    const expectedOutput = 'FOOBAR';
    expect(HelpersCamelCase(input)).toEqual(expectedOutput);
  });

  it('should handle empty input string', () => {
    const input = '';
    const expectedOutput = '';
    expect(HelpersCamelCase(input)).toEqual(expectedOutput);
  });

  it('should handle null or undefined input', () => {
    expect(HelpersCamelCase('')).toEqual('');
  });
});
