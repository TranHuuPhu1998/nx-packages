import { camelCase } from './helpers-camel-case';

describe('camelCase', () => {
  it('should convert space-separated string to camel case', () => {
    const input = 'foo bar';
    const expectedOutput = 'fooBar';
    expect(camelCase(input)).toEqual(expectedOutput);
  });

  it('should convert hyphen-separated string to camel case', () => {
    const input = '--foo-bar--';
    const expectedOutput = 'FooBar';
    expect(camelCase(input)).toEqual(expectedOutput);
  });

  it('should convert underscore-separated string to camel case', () => {
    const input = '__FOO_BAR__';
    const expectedOutput = 'FOOBAR';
    expect(camelCase(input)).toEqual(expectedOutput);
  });

  it('should handle empty input string', () => {
    const input = '';
    const expectedOutput = '';
    expect(camelCase(input)).toEqual(expectedOutput);
  });

  it('should handle null or undefined input', () => {
    expect(camelCase('')).toEqual('');
  });
});
