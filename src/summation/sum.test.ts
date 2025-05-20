import { expect, test } from '@jest/globals'
import { sum } from './sum'

test('finite sum', () => {
  const expectedArr = [
    {
      summation: sum(1, 10, i => i),
      result: 55,
    },
    {
      summation: sum(1, 5, i => 5*i),
      result: 75,
    },
    {
      summation: sum(1, 10, i => i**2),
      result: 385,
    },
  ]

  expectedArr.forEach((expected) => {
    expect(expected.summation).toBe(expected.result)
  })
})

test('arithmetic sequence sum', () => {
  const gaussSum = (n: number) => {
    return n * (n + 1) / 2
  }

  const inputs = [1, 2, 100, 999]

  inputs.forEach((n) => {
    const sumResult = sum(1, n, i => i)
    const gaussResult = gaussSum(n)

    expect(sumResult).toBe(gaussResult)
  })
})

// Rule 1: The summation of the sums of two or more variables equals the sum of their summations
test('rule 1', () => {
  const inputArr = [
    { x: 1, y: 2 },
    { x: 24, y: 73 },
  ]

  inputArr.forEach((input) => {
    const resultXPlusY = sum(1, 100, () => input.x + input.y)
    const resultX = sum(1, 100, () => input.x)
    const resultY = sum(1, 100, () => input.y)

    expect(resultXPlusY).toBe(resultX + resultY)
  })
})

// Rule 2: The summation of the product of a constant and the values of a variable is equal to the product of the constant and the summation of the variable
test('rule 2', () => {
  const inputArr = [1, 2, 10, 999]

  inputArr.forEach((k) => {
    const arithmeticSumTimesK = sum(1, 100, i => i * k)
    const arithmeticSum = sum(1, 100, i => i)

    expect(arithmeticSumTimesK).toBe(arithmeticSum * k)
  })
})

// Rule 3: The summation of a constant taken N times is the product of the constant and N 
test('rule 3', () => {
  const inputArr = [
    { k: 1, n: 10 },
    { k: 2, n: 10 },
    { k: 9, n: 367 },
    { k: 13, n: 77 },
  ]

  inputArr.forEach((input) => {
    const sumK = sum(1, input.n, () => input.k)

    expect(sumK).toBe(input.k * input.n)
  })
})

// Rule 4: The summation of a constant plus the values of a variable is equal to the product of N and the constant, plus the summation of the values of the variable
test('rule 4', () => {
  const inputArr = [
    { k: 1, n: 10 },
    { k: 2, n: 10 },
    { k: 9, n: 367 },
    { k: 13, n: 77 },
  ]

  inputArr.forEach((input) => {
    const sumPlusK = sum(1, input.n, i => input.k + i)
    const arithmeticSum = sum(1, input.n, i => i)

    expect(sumPlusK).toBe(input.k * input.n + arithmeticSum)
  })
})

// Rule 5: The summation of the values of a variable minus a constant is equal to the summation of the values of the variable minus the product of N and the constant
test('rule 5', () => {
  const inputArr = [
    { k: 1, n: 10 },
    { k: 2, n: 10 },
    { k: 9, n: 367 },
    { k: 13, n: 77 },
  ]

  inputArr.forEach((input) => {
    const sumMinusK = sum(1, input.n, i => i - input.k )
    const arithmeticSum = sum(1, input.n, i => i)

    expect(sumMinusK).toBe(arithmeticSum - input.k * input.n)
  })
})
