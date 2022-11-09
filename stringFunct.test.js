// import {  reverseString } from 'stringFunct.js';

const StringClass = require('./stringFunct');

describe('StringClass', () => {
  test('reverse string', () => {
    expect(StringClass.reverseString('12345678')).toBe('87654321');
  });

  test('less than 1', () => {
    expect(StringClass.stringLength('')).toThrow(
      'String length must be between 0 and 10'
    );
  });

  //   test('more than 10', () => {
  //     expect(StringClass.stringLength('12345678901')).toBe(
  //       'String length must be between 0 and 10'
  //     );
  //   });

  test('within range', () => {
    expect(StringClass.stringLength('1234567890')).toBe(10);
  });

  test('within range', () => {
    expect(StringClass.stringLength('12345678')).toBe(8);
  });
});
