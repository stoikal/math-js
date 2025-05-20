type Fn = (i: number) => number;

function sum(i: number, n: number, fn: Fn) {
  let result = 0;

  for (;i <= n; i++) {
    result += fn(i)
  }

  return result;
}

export { sum }
