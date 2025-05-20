// a ≡ b (mod n)
// a is congruent to b mod n if n divides (a-b)
// a divides b if we can find an integer k such that b = a * k
export const isCongruent = (a: number, b: number, mod: number) => {
  return (a - b) % mod === 0
}
