/**
 * @param {string} s
 * @return {number}
 */

// using dynamic programing
var numDecodings = function (s) {
  let dp = Array(s.length + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1

  for (let i = 2, n = s.length + 1; i < n; i++) {
    const lastTwoDigit = Number(`${s[i - 2]}${s[i - 1]}`)

    if (Number(s[i - 1]) > 0) {
      dp[i] += dp[i - 1]
    }

    if (lastTwoDigit > 9 && lastTwoDigit < 27) {
      dp[i] += dp[i - 2]
    }
  }

  return dp.pop()
}

const n = numDecodings('11106')
console.log(n)
