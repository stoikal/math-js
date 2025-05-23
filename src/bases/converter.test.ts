import { expect, test } from '@jest/globals'
import { convert, decimalToBase, toDecimal } from './converter'

test('toDecimal', () => {
  const expectedArr = [
    {
      input: { numStr: "1234567", base: 10 },
      output: 1234567
    },
    {
      input: { numStr: "1234567", base: 8 },
      output: 342391
    },
    {
      input: { numStr: "1011001101110", base: 2 },
      output: 5742
    },
    {
      input: { numStr: "123", base: Math.PI },
      output: 19.152789708268944
    },
  ]

  expectedArr.forEach(({ input, output }) => {
    const result = toDecimal(input.numStr, input.base)
    expect(result).toBe(output)
  })
})

test('decimalToBinary', () => {
  const expectedArr = [
    {
      input: 227,
      output: '11100011',
    },
    {
      input: 184,
      output: '10111000',
    },
    {
      input: 31,
      output: '11111',
    }
  ]
  
  expectedArr.forEach(({ input, output }) => {
    const toBinary = decimalToBase(2)
    const result = toBinary(input)
    expect(result).toBe(output)
  })
})

test('decimalToOctal', () => {
  const expectedArr = [
    {
      input: 1977,
      output: '3671',
    },
    {
      input: 888,
      output: '1570',
    },
  ]
  
  expectedArr.forEach(({ input, output }) => {
    const toOctal = decimalToBase(8)
    const result = toOctal(input)
    expect(result).toBe(output)
  })
})

test('decimalToHexadecimal', () => {
  const expectedArr = [
    {
      input: 1543,
      output: '607',
    },
    {
      input: 2748,
      output: 'ABC',
    },
  ]
  
  expectedArr.forEach(({ input, output }) => {
    const toHex = decimalToBase(16)
    const result = toHex(input)
    expect(result).toBe(output)
  })
})

test('convert', () => {
  expect(convert(31, '01')).toBe('11111')
  expect(convert(2748, '0123456789ABCDEF')).toBe('ABC')
  expect(convert(1234567890, ')!@#$%^&*(')).toBe('!@#$%^&*()')
  expect(convert(42, '.~')).toBe('~.~.~.')
  expect(convert(10, '|')).toBe('||||||||||')
  expect(convert(10, '')).toBe('')
})
