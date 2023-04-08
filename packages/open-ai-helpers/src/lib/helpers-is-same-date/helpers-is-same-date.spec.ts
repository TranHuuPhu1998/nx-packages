import { isSameDate } from './helpers-is-same-date';

describe('isSameDate', () => {
  it('should return true if two dates are the same', () => {
    const date1 = new Date(2022, 0, 1);
    const date2 = new Date(2022, 0, 1);
    expect(isSameDate(date1, date2)).toBe(true);
  });

  it('should return false if two dates are not the same', () => {
    const date1 = new Date(2022, 0, 1);
    const date2 = new Date(2022, 0, 2);
    expect(isSameDate(date1, date2)).toBe(false);
  });
});
