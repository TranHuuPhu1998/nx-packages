import { words } from './helpers-words'

describe('words', () => {
  it('should split a string into words using the default pattern', () => {
    const result = words('Hello world!');
    expect(result).toEqual(['Hello', 'world']);
  });

  it('should split a string into words using a custom pattern', () => {
    const result = words('Fred, Barney, & Pebbles', /[^, ]+/g);
    expect(result).toEqual(['Fred', 'Barney', '&', 'Pebbles']);
  });

  it('should return an empty array for an empty string', () => {
    const result = words('');
    expect(result).toEqual([]);
  });

  it('should return an empty array for a string with no words', () => {
    const result = words(',.;');
    expect(result).toEqual([]);
  });

  it('should handle undefined pattern by using the default pattern', () => {
    const result = words('Fred, Barney, & Pebbles', undefined);
    expect(result).toEqual(['Fred', 'Barney', 'Pebbles']);
  });
});

