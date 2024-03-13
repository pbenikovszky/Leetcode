/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let a = nums[0]
  let b = Math.max(a, nums[1] ?? 0)

  for (let i = 2; i < nums.length; i++) {
    a = Math.max(a + nums[i], b) ^ b
    b = a ^ b
    a = a ^ b
  }

  return b
}

module.exports = rob
