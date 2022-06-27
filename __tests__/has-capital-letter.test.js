const { hasCapitalLetter } = require('../src/validator')

test('should return false when empty password', () => {
  expect(hasCapitalLetter('')).toBe(false)
})

test('should return false when password have only lower letter', () => {
  expect(hasCapitalLetter('aofhgfhd')).toBe(false)
})

test('should return false when password have only numbers', () => {
  expect(hasCapitalLetter('4593029439')).toBe(false)
})

test('should return false when password have only special characters', () => {
  expect(hasCapitalLetter('!*&%%@^')).toBe(false)
})

test('should return false when password do not have capital letter', () => {
  expect(hasCapitalLetter('g87%sh4')).toBe(false)
})

test('should return true when password have at least 1 capital letter', () => {
  expect(hasCapitalLetter('fhAh6%dj')).toBe(true)
})
