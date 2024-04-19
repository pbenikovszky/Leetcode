/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a)
    stones[1] = stones[0] - stones[1]
    stones.shift()
  }

  return stones[0]
}

const stones = [
  434, 667, 378, 919, 212, 902, 240, 257, 208, 996, 411, 222, 557, 634, 425,
  949, 755, 833, 785, 886, 40, 159, 932, 157, 764, 916, 85, 300, 130, 278
]

console.log(lastStoneWeight(stones))
