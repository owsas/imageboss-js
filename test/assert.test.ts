import assert from '../src/assert';

test('should throw error if the condition is not truthy', () => {
  expect(() => {
    assert(1 + 1 === 3, 'The addition is not truthy');
  }).toThrowError('The addition is not truthy');
});

test('should not throw error if the condition is truthy', () => {
  expect(() => {
    assert(1 + 1 === 2, 'The addition is not truthy');
  }).not.toThrowError();
});
