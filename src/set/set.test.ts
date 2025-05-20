import { expect, test } from '@jest/globals'

test('size', () => {
  const R = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])

  expect(R.size).toBe(7)
})

test('subset', () => {
  const R = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])
  const B = new Set(['blue', 'indigo', 'violet'])
  const A = new Set(['red', 'black'])

  expect(B.isSubsetOf(R)).toBe(true)
  expect(A.isSubsetOf(R)).toBe(false)
})

test('complement', () => {
  const R = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])
  const B = new Set(['blue', 'indigo', 'violet'])
  const Bc = R.difference(B)

  const expectedComplement = new Set(['red', 'orange', 'yellow', 'green'])

  expect(Bc.size).toBe(R.size - B.size)
  expect(Bc.isSubsetOf(R)).toBe(true)
  expect(Bc.isDisjointFrom(B)).toBe(true)
  
  expectedComplement.forEach((el) => {
    expect(Bc.has(el)).toBe(true)
  })

  Bc.forEach((el) => {
    expect(expectedComplement.has(el)).toBe(true)
  })
})

// A ∪ ∅ = A
test('Identity Property for Union', () => {
  const A = new Set([3, 5, 7, 11])
  const O = new Set()

  const X = A.union(O)
  expect(X.difference(A).size).toBe(0)
})

// A ⋂ U = A
test('Identity Property for Intersection', () => {
  const U = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const A = new Set([2, 4, 6, 8])

  const I = A.intersection(U)
  expect(I.difference(A).size).toBe(0)
})

// A ⋂ ∅ = ∅
test('Domination Laws: A ⋂ ∅ = ∅', () => {
  const A = new Set([3, 5, 7, 11])
  const O = new Set()

  const I = A.intersection(O)
  expect(I.size).toBe(0)
  expect(I.difference(O).size).toBe(0)
})

// A ∪ U = U
test('Domination Laws: A ∪ U = U', () => {
  const U = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const A = new Set([2, 4, 6, 8])

  const X = A.union(U)
  expect(X.difference(U).size).toBe(0)
  expect(X.size).toBe(U.size)
})
