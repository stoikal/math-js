export type Row = number[];

export default class Matrix {
  #rows: Row[] = []

  constructor(rows: Row[]) {
    const columnCount = Math.max(...rows.map(r => r.length))

    rows.forEach((r, rIndex) => {
      for (let i = 0; i < columnCount; i++) {
        if (i === 0) {
          this.#rows[rIndex] = []
        }

        this.#rows[rIndex].push(r[i] || 0)
      }
    })
  }

  get shape() {
    const numRows = this.#rows.length
    const numCols = this.#rows[0].length

    return [numRows, numCols]
  }

  getElement(row: number, col: number) {
    return this.#rows[row][col]
  }

  toString() {
    let result = ""

    this.#rows.forEach((r, rIndex) => {
      if (rIndex) result += "\n"

      r.forEach((c, i) => {
        result += (i === 0) ? "|" : " "
        result += c;
      });

      result += "|"
    });

    return result
  }

  multiplyScalar(n: number) {
    const newElements = this.#rows.map(r => r.map(c => c * n))

    return new Matrix(newElements)
  }

  static transpose(matrix: Matrix) {
    const [numRows, numCols] = matrix.shape

    const newElements: Row[] = []

    for (let i = 0; i < numCols; i++) {
      newElements.push([])
      for (let j = 0; j < numRows; j++) {
        newElements[i][j] = matrix.getElement(j, i)
      }
    }

    return new Matrix(newElements)
  }

  static Identity = class extends Matrix {
    constructor(size: number) {
      const rows: Row[] = [];

      for (let i = 0; i < size; i++) {
        rows[i] = []

        for (let j = 0; j < size; j++) {
          rows[i][j] = i === j ? 1 : 0
        }
      }

      super(rows)
    }
  }
}
