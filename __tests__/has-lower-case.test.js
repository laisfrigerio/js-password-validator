const { hasLowerCase } = require('../src/validator')

test('should return false when empty password', () => {
  expect(hasLowerCase('')).toBe(false)
})

test('should return false when password have only capital letter', () => {
  expect(hasLowerCase('OBADJEIV')).toBe(false)
})

test('should return false when password have only numbers', () => {
  expect(hasLowerCase('4593029439')).toBe(false)
})

test('should return false when password have only special characters', () => {
  expect(hasLowerCase('!*&%%@^')).toBe(false)
})

test('should return false when password do not have lower case letter', () => {
  expect(hasLowerCase('H87%CF4')).toBe(false)
})

test('should return true when password have at least 1 lower case letter', () => {
  expect(hasLowerCase('fhAh6%dj')).toBe(true)
})
