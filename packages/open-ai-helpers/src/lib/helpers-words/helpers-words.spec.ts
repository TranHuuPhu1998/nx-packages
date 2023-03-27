import { HelpersWords } from './helpers-words'

describe('HelpersWords', () => {
  it('should split a string into HelpersWords using the default pattern', () => {
    const result = HelpersWords('Hello world!');
    expect(result).toEqual(['Hello', 'world']);
  });

  it('should split a string into HelpersWords using a custom pattern', () => {
    const result = HelpersWords('Fred, Barney, & Pebbles', /[^, ]+/g);
    expect(result).toEqual(['Fred', 'Barney', '&', 'Pebbles']);
  });

  it('should return an empty array for an empty string', () => {
    const result = HelpersWords('');
    expect(result).toEqual([]);
  });

  it('should return an empty array for a string with no HelpersWords', () => {
    const result = HelpersWords(',.;');
    expect(result).toEqual([]);
  });

  it('should handle undefined pattern by using the default pattern', () => {
    const result = HelpersWords('Fred, Barney, & Pebbles', undefined);
    expect(result).toEqual(['Fred', 'Barney', 'Pebbles']);
  });
});

