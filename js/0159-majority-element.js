/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ans = null
  let count = 0

  for (const num of nums) {
    if (count === 0) {
      ans = num
    }

    count = num === ans ? count + 1 : count - 1
  }
  return ans
}

const input = [2, 2, 1, 1, 1, 1, 1, 2, 2]

console.log(majorityElement(input))
