import { pick } from './helpers-pick';

describe('pick', () => {
  it('should return an object with the picked properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = pick(object, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object when no properties are picked', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = pick(object);
    expect(result).toEqual({});
  });
});
