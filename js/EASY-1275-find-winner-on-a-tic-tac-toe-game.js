/**
 * @param {number[][]} moves
 * @return {string}
 */

const winningMoves = [
  [
    [0, 0],
    [1, 1],
    [2, 2]
  ],
  [
    [2, 0],
    [1, 1],
    [0, 2]
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2]
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2]
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2]
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0]
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2]
  ]
]

var tictactoe = function (moves) {
  const movesA = []
  const movesB = []

  for (let i = 0; i < moves.length; i++) {
    if ((i & 1) === 0) {
      movesA.push(moves[i])
    } else {
      movesB.push(moves[i])
    }
  }

  if (
    winningMoves.some((moves) =>
      moves.every((move) => movesA.some((moveA) => areTheSameMove(moveA, move)))
    )
  ) {
    return 'A'
  }

  if (
    winningMoves.some((moves) =>
      moves.every((move) => movesB.some((moveB) => areTheSameMove(moveB, move)))
    )
  ) {
    return 'B'
  }

  return moves.length === 9 ? 'Draw' : 'Pending'
}

const areTheSameMove = (move1, move2) => {
  return move1[0] === move2[0] && move1[1] === move2[1]
}

const movesArray = [
  [
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2]
  ],
  [
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0]
  ],
  [
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2]
  ]
]

for (const moves of movesArray) {
  console.log(tictactoe(moves))
}
