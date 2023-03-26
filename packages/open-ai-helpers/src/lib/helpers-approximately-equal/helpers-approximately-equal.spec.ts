import { HelpersApproximatelyEqual } from './helpers-approximately-equal';

describe('HelpersApproximatelyEqual check equal to each other 1', () => {
  it('should work', () => {
    expect(HelpersApproximatelyEqual(Math.PI / 2.0, 1.5708)).toEqual(true);
  });
});

describe('HelpersApproximatelyEqual check equal to each other 2', () => {
  it('should work', () => {
    expect(HelpersApproximatelyEqual(1, 2)).toEqual(false);
  });
});

