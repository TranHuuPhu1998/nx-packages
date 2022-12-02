import { isEven } from './is-even';

describe('isEven', () => {
  it('should work', () => {
    expect(isEven(1)).toEqual(false);
  });
});
