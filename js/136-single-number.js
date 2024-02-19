/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((prev, current) => {
    return prev ^ current
  }, 0)
}

const input = [4, 1, 4, 3, 2, 1, 2]
console.log(singleNumber(input))
