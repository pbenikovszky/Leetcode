/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (nums[i] === 0 && max <= i) break
  }
  return max >= nums.length - 1
}

module.exports = canJump
