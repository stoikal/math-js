import { expect, test } from '@jest/globals'
import { findSmallestA, isCongruent } from './congruence'

test('isCongruent', () => {
  expect(isCongruent(7, 1, 6)).toBe(true)
  expect(isCongruent(2, 5, 3)).toBe(true)
  expect(isCongruent(6, 5, 4)).toBe(false)
})
