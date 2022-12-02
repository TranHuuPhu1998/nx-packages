import { isCheckSize } from './is-check-size';

describe('isCheckSize', () => {
  it('should work toBeTruthy when check 1000000 byte 1000000 with size', () => {
    expect(isCheckSize(1000000, 'MB', 1)).toBeTruthy();
  });

  it('should work toBeFalsy when check 1000000 byte 1000000 with size', () => {
    expect(isCheckSize(99999999, 'MB', 10)).toBeFalsy();
  });
});
