import { expect, test } from '@jest/globals'
import Vector from "./Vector"
import Matrix from './Matrix';

test('instantiation', () => {
  const a = new Vector([1, 2, 3])

  const expected = new Matrix([
    [1],
    [2],
    [3],
  ])

  expect(a.toString())
    .toBe(expected.toString())
})

test('toString', () => {
  const a = new Vector([1, 2, 3])

  expect(a.toString())
    .toBe("|1|\n|2|\n|3|")
})

test('dimension', () => {
  const a = new Vector([1, 2, 3])

  expect(a.dimension).toEqual(3)

  const b = new Vector([1, 2, 3, 4])

  expect(b.dimension).toEqual(4)
})

test('dot product', () => {
  const a = new Vector([1, 2, 3])
  const b = new Vector([4, 5, 6])

  expect(Vector.dot(a, b)).toBe(32)
})

test('magnitude', () => {
  const a = new Vector([1, 2, 3])

  expect(a.magnitude)
    .toBe(
      Math.sqrt(
        Math.pow(1, 2) +
        Math.pow(2, 2) +
        Math.pow(3, 2),
      )
    )
})
