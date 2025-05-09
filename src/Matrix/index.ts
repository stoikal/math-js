type Row = number[];

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
}
