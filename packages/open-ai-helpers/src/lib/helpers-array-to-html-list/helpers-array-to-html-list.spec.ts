import { arrayToHtmlList } from './helpers-array-to-html-list';

describe(`HelpersAll check input: ['item 1', 'item 2'] => expected: <ul><li>item 1</li><li>item 2</li></ul>`, () => {
  it('should work', () => {
    expect(arrayToHtmlList(['item 1', 'item 2'])).toEqual('<ul><li>item 1</li><li>item 2</li></ul>');
  });
});

describe(`HelpersAll check array must greater than 1`, () => {
  it('should work if Input must be an array', () => {
    expect(arrayToHtmlList([])).toEqual(null);
  });
});