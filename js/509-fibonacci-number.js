/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n
  let a = 1
  let b = 1
  for (let i = 2; i < n; i++) {
    b = a + b
    a = b - a
  }
  return b
}

module.exports = fib
