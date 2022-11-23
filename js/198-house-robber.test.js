const rob = require('./198-house-robber')

test('Leetcode 198: House robber - [1, 2, 3, 1]', () => {
  const input = [1, 2, 3, 1]
  const expectedOutput = 4
  expect(rob(input)).toEqual(expectedOutput)
})

test('Leetcode 198: House robber - [2, 7, 9, 3, 1]', () => {
  const input = [2, 7, 9, 3, 1]
  const expectedOutput = 12
  expect(rob(input)).toEqual(expectedOutput)
})

test('Leetcode 198: House robber - [2,1,1,2]', () => {
  const input = [2, 1, 1, 2]
  const expectedOutput = 4
  expect(rob(input)).toEqual(expectedOutput)
})
