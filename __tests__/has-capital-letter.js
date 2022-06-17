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

// test('only number', () => {
//   expect(hasLetters('1')).toBe(true)
// })

// test('letters and number', () => {
//   expect(hasLetters('A2b')).toBe(true)
// })

// test('more than 1 number', () => {
//   expect(hasLetters('d2r2')).toBe(true)
// })
