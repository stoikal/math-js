export const toDecimal = (numericString: string, base: number) => {
  if (base < 1 || base > 20) {
    throw new Error('only support 1 >= base <= 20')
  }

  const map = '0123456789ABCDEFGHIJ'

  let decimal = 0

  for (let i = 0; i < numericString.length; i++) {
    const digit = numericString[i].toUpperCase()
    const n = map.indexOf(digit)

    if (n >= base) {
      throw new Error(`invalid digit: ${n}; input: ${numericString}; base: ${base}`)
    }

    const exponent = numericString.length - 1 - i;

    decimal += n * base**exponent
  }

  return decimal
}

export const decimalToBase = (base: number) => (num: number) => {
  if (base < 1 || base > 20) {
    throw new Error('only support 1 >= base <= 20')
  }

  const map = '0123456789ABCDEFGHIJ'

  let result = ""
  while (num > 0) {
    const remainder = num % base
    const digit = map[remainder]
    result = digit + result
    num = Math.floor(num / base)
  }
  return result
}