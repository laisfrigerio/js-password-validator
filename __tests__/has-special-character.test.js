const { hasSpecialCharacter } = require('../src/validator')

test('empty password', () => {
  expect(hasSpecialCharacter('')).toBe(false)
})

test('only numbers', () => {
  expect(hasSpecialCharacter('123')).toBe(false)
})

test('numbers, letter and capital letter', () => {
  expect(hasSpecialCharacter('ab6C')).toBe(false)
})

test('has special character *', () => {
  expect(hasSpecialCharacter('*KcU8H49')).toBe(true)
})  

test('has special character @', () => {
  expect(hasSpecialCharacter('tPcU@93Gy49')).toBe(true)
})

test('has special character !', () => {
  expect(hasSpecialCharacter('!aH49')).toBe(true)
})

test('has special character #', () => {
  expect(hasSpecialCharacter('aH4#9')).toBe(true)
})

test('has special character %', () => {
  expect(hasSpecialCharacter('qW6c93Kv05%')).toBe(true)
}) 

test('has special character &', () => {
  expect(hasSpecialCharacter('&KbM3Yy14L')).toBe(true)
})

test('has special character (', () => {
  expect(hasSpecialCharacter('0W6XkQ(x765')).toBe(true)
}) 

test('has special character )', () => {
  expect(hasSpecialCharacter('1C2bc3WP)')).toBe(true)
})

test('has special character ^', () => {
  expect(hasSpecialCharacter('WoK3^0c')).toBe(true)
})

test('has special character ~', () => {
  expect(hasSpecialCharacter('YoO08cD~0c')).toBe(true)
}) 

test('has special character {', () => {
  expect(hasSpecialCharacter('{WVUY3g')).toBe(true)
})

test('has special character }', () => {
  expect(hasSpecialCharacter('{8ChqA5l3}')).toBe(true)
})

test('has special character <', () => {
  expect(hasSpecialCharacter('aH<49')).toBe(true)
})

test('has special character >', () => {
  expect(hasSpecialCharacter('4B1T1r0c>')).toBe(true)
})