/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const prefixXors = []
  prefixXors.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    prefixXors.push(prefixXors[i - 1] ^ arr[i])
  }
  return queries.map((query) => prefixXors[query[0] - 1] ^ prefixXors[query[1]])
}

const arr = [1, 3, 4, 8]
const queries = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 3]
]

console.log(xorQueries(arr, queries))
