const { hasNumbers } = require('../src/validator')

test('empty password', () => {
  expect(hasNumbers('')).toBe(false)
})

test('only letters', () => {
  expect(hasNumbers('Aa')).toBe(false)
})

test('letters and special characters', () => {
  expect(hasNumbers('Aa#')).toBe(false)
})

test('letters, special chars and numbers', () => {
  expect(hasNumbers('A#92b!')).toBe(true)
})

test('only number', () => {
  expect(hasNumbers('1')).toBe(true)
})

test('letters and number', () => {
  expect(hasNumbers('A2b')).toBe(true)
})

test('more than 1 number', () => {
  expect(hasNumbers('d2r2')).toBe(true)
})
