/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let numDecimal = 0
  for (let i = 0; i < num.length; i++) {
    numDecimal += num[i] * 10 ** (num.length - 1 - i)
  }
  return (numDecimal + k)
    .toString()
    .split('')
    .map((s) => +s)
}

const tests = [
  { num: [1, 2, 0, 0], k: 34 },
  { num: [2, 7, 4], k: 181 },
  { num: [2, 1, 5], k: 806 }
]

for (const t of tests) {
  console.log(addToArrayForm(t.num, t.k))
}
