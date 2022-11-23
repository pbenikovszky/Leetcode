const longestCommonPrefix = require('./014-longest-common-prefix')

test('longestCommonPrefix', () => {
  const arr = ['acc', 'aaa', 'aaba']
  const result = 'a'
  expect(longestCommonPrefix(arr)).toEqual(result)
})
