const fizzBuzz = require('./fizz');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('should return a number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
});
