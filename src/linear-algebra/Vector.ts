import Matrix from "./Matrix";

export default class Vector extends Matrix {
  constructor(cols: number[]) {
    super(
      cols.map(n => [n])
    )
  }

  get dimension() {
    return this.shape[0]
  }

  get magnitude() {
    let sum = 0;

    for (let i = 0; i < this.shape[0]; i++) {
      const n = this.getElement(i, 0)
      sum += n * n
    }

    return Math.sqrt(sum)
  }

  static dot (a: Vector, b: Vector) {
    if (a.dimension !== b.dimension) {
      throw new Error("different sizes!")
    }

    let result = 0

    for (let i = 0; i < a.dimension; i++) {
      result += a.getElement(i, 0) * b.getElement(i, 0)
    }

    return result
  }
}
