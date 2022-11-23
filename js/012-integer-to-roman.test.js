const intToRoman = require('./012-integer-to-roman')

test('longestCommonPrefix', () => {
  const arr = ['acc', 'aaa', 'aaba']
  const results = ['III', 'LVIII', 'MCMXCIV']
  for (let i = 0; i < arr.length; i++) {
    expect(longestCommonPrefix(arr[i])).toEqual(results[i])
  }
})
