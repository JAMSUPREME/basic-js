const count = require('../count');

describe('Given two numbers', () => {
  test('They should add up', () => {

    const num = count(1, 2);

    expect(num).toEqual(3);
  });
});