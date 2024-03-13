/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let sum = 0
  while (n > 0) {
    let prevN = n
    n = ~~(n / k)
    sum += prevN - n * k
  }
  return sum
}

const testCases = [
  {
    n: 34,
    k: 6
  },
  {
    n: 10,
    k: 10
  }
]

for (const testCase of testCases) {
  const { n, k } = testCase
  console.log(`n: ${n}, k: ${k} --> ${sumBase(n, k)}`)
}
