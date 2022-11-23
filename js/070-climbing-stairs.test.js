const climbStairs = require('./070-climbing-stairs')

test('Leetcode 70: Climbing stairs', () => {
  const numbers = [2, 3, 5]
  const results = [2, 3, 8]
  for (let i = 0; i < numbers.length; i++) {
    expect(climbStairs(numbers[i])).toEqual(results[i])
  }
})
