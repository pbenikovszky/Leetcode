/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n
  let a = 2
  let b = 3
  for (i = 4; i <= n - 1; i++) {
    b = a + b
    a = b - a
  }
  return a + b
}

module.exports = climbStairs

console.log(climbStairs(6))
