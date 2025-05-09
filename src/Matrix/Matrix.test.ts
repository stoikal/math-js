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

  expect(A.multiplyScalar(3).toString()).toBe(expected.toString())
})

test('getElement', () => {
  const A = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])

  expect(A.getElement(0, 0)).toBe(1)
  expect(A.getElement(1, 1)).toBe(5)
  expect(A.getElement(2, 1)).toBe(8)
})

test('transpose', () => {
  const A = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])

  const A_transpose = Matrix.transpose(A)

  const expectedA = new Matrix([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])

  expect(A_transpose.toString()).toBe(expectedA.toString())

  const B = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
  ])

  const B_transpose = Matrix.transpose(B)

  const expectedB = new Matrix([
    [1, 4],
    [2, 5],
    [3, 6],
  ])

  expect(B_transpose.toString()).toBe(expectedB.toString())
})

test('Identity', () => {
  const I = new Matrix.Identity(3)

  const expected = new Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])

  expect(I.shape).toEqual(expected.shape)
  expect(I.toString()).toBe(expected.toString())
})