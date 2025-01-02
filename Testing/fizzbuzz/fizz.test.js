const fizzBuzz = require('./fizz');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('should return a number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it('should return fizz if divisable by 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(12)).toEqual('Fizz');
  });

  it('should return fizz if divisable by 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
  });
});
