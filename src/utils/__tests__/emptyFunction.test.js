// @flow

import emptyFunction from '../emptyFunction';

describe('emptyFunction', () => {
  it('should return emptyFunction function.', () => {
    expect(typeof emptyFunction).toBe('function');
  });

  it('should return undefined when invoked.', () => {
    expect(emptyFunction()).toBeUndefined();
    expect(emptyFunction('string')).toBeUndefined();
    expect(emptyFunction({})).toBeUndefined();
    expect(emptyFunction(0)).toBeUndefined();
    expect(emptyFunction(null)).toBeUndefined();
    expect(emptyFunction(undefined)).toBeUndefined();
  });
});
