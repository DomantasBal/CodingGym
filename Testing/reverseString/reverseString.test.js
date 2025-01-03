const reverseString = require('./reverseString');

describe('reverse string', () => {
  it('should be a function', () => {
    excpect(typeof reverseString).toEqual('function');
  });

  it('should return string', () => {
    expect(typeof reverseString('Hello')).toEqual('string');
  });

  it('should return reversed string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
});
