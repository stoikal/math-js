export const toDecimal = (numericString: string, base: number) => {
  if (base < 2 || base > 32) {
    throw new Error('only support 2 >= base <= 32')
  }

  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUV'

  let decimal = 0

  for (let i = 0; i < numericString.length; i++) {
    const digit = numericString[i].toUpperCase()
    const n = alphabet.indexOf(digit)

    if (n >= base) {
      throw new Error(`invalid digit: ${n}; input: ${numericString}; base: ${base}`)
    }

    const exponent = numericString.length - 1 - i;

    decimal += n * base**exponent
  }

  return decimal
}

export const convert = (num: number, alphabet: string) => {
  const base = alphabet.length;
  let result = ""

  if (base === 1) {
    result = alphabet.repeat(num)
  } else if (base > 1) {
    while (num > 0) {
      const remainder = num % base
      const digit = alphabet[remainder]
      result = digit + result
      num = Math.floor(num / base)
    }
  }

  return result
}


export const decimalToBase = (base: number) => {
  if (base < 2 || base > 32) {
    throw new Error('only support 2 >= base <= 32')
  }

  return (num: number) => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUV'

    return convert(num, alphabet.slice(0, base))
  }
}

