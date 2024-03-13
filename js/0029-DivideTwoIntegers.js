/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend == 0) {
    return 0
  }

  let a = Math.abs(dividend)
  const b = Math.abs(divisor)

  let result = 0
  while (a >= b) {
    let tmp = b
    let mul = 1
    while (tmp <= a) {
      a -= tmp
      result += mul
      tmp += tmp
      mul += mul
    }
  }

  if ((dividend >= 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    result = -result
  } else {
  }

  return Math.min(Math.pow(2, 31) - 1, Math.max(result, -Math.pow(2, 31)))
}

console.time('Divide')
const result = divide(372, 6)
// const result = divide(-2147483648, 1)
console.timeEnd('Divide')
console.log(result)
