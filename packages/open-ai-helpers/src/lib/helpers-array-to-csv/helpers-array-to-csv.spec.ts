import { HelpersArrayToCSV } from './helpers-array-to-csv';

describe('HelpersAll check array greater 1', () => {
  it('should work', () => {
    expect(HelpersArrayToCSV([['a', 'b'], ['c', 'd']])).toEqual('"a","b"\n"c","d"');
  });
});

describe('HelpersAll check array greater 1', () => {
  it('should work', () => {
    expect(HelpersArrayToCSV([['a', 'b'], ['c', 'd']], ';')).toEqual('"a";"b"\n"c";"d"');
  });
});

describe('HelpersAll check array greater 1', () => {
  it('should work', () => {
    expect(HelpersArrayToCSV([['a', 'b'], ['c', 'd']], ',')).toEqual('"a","b"\n"c","d"');
  });
});


describe('HelpersAll check if array [] return message', () => {
  it('should work', () => {
    expect(() => HelpersArrayToCSV([])).toThrowError('Array is not defined');
  });
});
