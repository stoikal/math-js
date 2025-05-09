import Matrix from "../Matrix";

export default class Vector extends Matrix {
  constructor(cols: number[]) {
    super(
      cols.map(n => [n])
    )
  }

  get dimension() {
    return this.shape[0]
  }

  static dot (a: Vector, b: Vector) {
    if (a.dimension !== b.dimension) {
      throw new Error("different size")
    }

    let result = 0

    for (let i = 0; i < a.dimension; i++) {
      result += a.getElement([i, 0]) * b.getElement([i, 0])
    }

    return result
  }
}
