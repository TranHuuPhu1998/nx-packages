import { HelpersCapitalize } from './helpers-capitalize';

describe('HelpersAll check fooBar => FooBar', () => {
  it('should work', () => {
    expect(HelpersCapitalize('fooBar')).toEqual('FooBar');
  });
});

describe('HelpersAll check foo => Foo', () => {
  it('should work', () => {
    expect(HelpersCapitalize('foo')).toEqual('Foo');
  });
});

describe('HelpersAll check hello word => Hello word', () => {
  it('should work', () => {
    expect(HelpersCapitalize('hello word')).toEqual('Hello word');
  });
});

