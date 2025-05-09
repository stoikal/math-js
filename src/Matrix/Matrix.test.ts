import { expect, test } from '@jest/globals'
import Matrix from '.';

test('toString', () => {
  const A = new Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])

  expect(A.toString()).toBe("|1 0 0|\n|0 1 0|\n|0 0 1|")

  const B = new Matrix([
    [6, 33, 71, 42],
    [9, 14, 47, 17],
    [2, 78, 54, 84],
  ])

  expect(B.toString())
    .toBe("|6 33 71 42|\n|9 14 47 17|\n|2 78 54 84|")
});

test('multiplyScalar', () => {
  const A = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])

  const expected = new Matrix([
    [ 3,  6,  9],
    [12, 15, 18],
    [21, 24, 27],
  ])

  expect(A.multiplyScalar(3)).toEqual(expected)
})
