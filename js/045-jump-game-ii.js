/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let result = 0
  let l = 0
  let r = 0
  while (r < nums.length - 1) {
    let farthest = 0
    for (let i = l; i <= r; i++) {
      if (nums[i] + i > farthest) {
        farthest = nums[i] + i
      }
    }
    l = r + 1
    r = farthest
    result++
  }
  return result
}

const input = [2, 3, 0, 1, 4]
console.log(jump(input))
