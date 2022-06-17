const { hasCapitalLetter } = require('../src/validator')

test('empty password', () => {
  expect(hasCapitalLetter('')).toBe(false)
})

test('only numbers', () => {
  expect(hasCapitalLetter('123')).toBe(false)
})

test('numbers and special characters', () => {
  expect(hasCapitalLetter('4#9')).toBe(false)
})

test('capital letter', () => {
  expect(hasCapitalLetter('abC')).toBe(true)
})

