// https://leetcode.com/problems/describe-the-painting/

/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function (segments) {
  const events = []
  for (const segment of segments) {
    events.push([segment[0], segment[2]])
    events.push([segment[1], -segment[2]])
  }

  const sortedEvents = events.sort((a, b) => a[0] - b[0])

  const states = {}
  let sum = 0
  for (const event of sortedEvents) {
    sum += event[1]
    states[event[0]] = sum
  }

  const ans = []
  const checkPoints = Object.keys(states)
  for (let i = 1; i < checkPoints.length; i++) {
    if (states[checkPoints[i - 1]] == 0) {
      continue
    }
    ans.push([
      +checkPoints[i - 1],
      +checkPoints[i],
      +states[checkPoints[i - 1]]
    ])
  }

  return ans
}

const testCases = [
  {
    segments: [
      [1, 4, 5],
      [3, 7, 7],
      [6, 7, 9],
      [9, 11, 4]
    ],
    expected: [
      [1, 3, 5],
      [3, 4, 12],
      [4, 6, 7],
      [6, 7, 16],
      [9, 11, 4]
    ]
  }
]

// const testCases = [
//   {
//     segments: [
//       [1, 4, 5],
//       [4, 7, 7],
//       [1, 7, 9]
//     ],
//     expected: [
//       [1, 4, 14],
//       [4, 7, 16]
//     ]
//   },
//   {
//     segments: [
//       [1, 7, 9],
//       [6, 8, 15],
//       [8, 10, 7]
//     ],
//     expected: [
//       [1, 6, 9],
//       [6, 7, 24],
//       [7, 8, 15],
//       [8, 10, 7]
//     ]
//   },
//   {
//     segments: [
//       [1, 4, 5],
//       [1, 4, 7],
//       [4, 7, 1],
//       [4, 7, 11]
//     ],
//     expected: []
//   },
//   {
//     segments: [
//       [4, 16, 12],
//       [9, 10, 15],
//       [18, 19, 13],
//       [3, 13, 20],
//       [12, 16, 3],
//       [2, 10, 10],
//       [3, 11, 4],
//       [13, 16, 6]
//     ]
//   }
// ]

for (const testCase of testCases) {
  console.log(splitPainting(testCase.segments))
  console.log(testCase.expected)
}
