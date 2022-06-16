const { hasMinLenght } = require('../src/validator')

test('empty password', () => {
  expect(hasMinLenght('')).toBe(false)
})

test('password less than 8 characters', () => {
  expect(hasMinLenght('A')).toBe(false)
})

test('password with 7 characters', () => {
  expect(hasMinLenght('AaBbCcD')).toBe(false)
})

test('password with minimum of 8 characters', () => {
  expect(hasMinLenght('AaBbCcDd')).toBe(true)
})
