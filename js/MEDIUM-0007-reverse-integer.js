/**
 * @param {number} x
 * @return {number}
 */
const MIN = -(2 ** 31)
const MAX = 2 ** 31 - 1
var reverse = function (x) {
  const sign = Math.sign(x)
  const digits = (x * sign).toString().split('')

  digits.reverse()

  const result = +digits.join('') * sign
  const isValid = result >= MIN && result <= MAX

  return isValid ? result : 0
}

const testNumbers = [123, -123, 120, 1534236469, -2147483648]

for (const number of testNumbers) {
  console.log(reverse(number))
}
