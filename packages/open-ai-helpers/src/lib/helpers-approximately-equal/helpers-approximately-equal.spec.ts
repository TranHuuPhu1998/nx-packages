import { approximatelyEqual } from './helpers-approximately-equal';

describe('approximatelyEqual check equal to each other 1', () => {
  it('should work', () => {
    expect(approximatelyEqual(Math.PI / 2.0, 1.5708)).toEqual(true);
  });
});

describe('approximatelyEqual check equal to each other 2', () => {
  it('should work', () => {
    expect(approximatelyEqual(1, 2)).toEqual(false);
  });
});

