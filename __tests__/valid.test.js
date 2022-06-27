const { valid } = require('../src/validator')

test('should return false when empty password', () => {
  expect(valid('')).toBe(false)
})

test('should return false when password does not have 8 characters', () => {
  expect(valid('a1b2c3d')).toBe(false)
})

test('should return false when password doen not have numbers', () => {
  expect(valid('Fahc%s%!')).toBe(false)
})

test('should return false when password does not have capital letter', () => {
  expect(valid('%73jsb39d!*')).toBe(false)
})

test('should return false when password does not have lower case letter', () => {
  expect(valid('%73ACP39I!*')).toBe(false)
})

test('should return false when password does not have special characters', () => {
  expect(valid('a73ACP39I2')).toBe(false)
})

test('should return true when password is valid', () => {
  expect(valid('fhAh6%dj')).toBe(true)
})
