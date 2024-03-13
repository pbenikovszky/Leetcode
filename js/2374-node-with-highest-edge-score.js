/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  const scores = new Array(edges.length).fill(0)
  let max = -Infinity

  for (let i = 0; i < edges.length; i++) {
    scores[edges[i]] += i
    max = Math.max(scores[edges[i]], max)
  }

  for (let i = 0; i < edges.length; i++) {
    if (scores[i] === max) {
      return i
    }
  }
}

const edges1 = [1, 0, 0, 0, 0, 7, 7, 5]
const edges2 = [2, 0, 0, 2]

console.log(edgeScore(edges1))
