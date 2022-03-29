/**
 * @description [null, null, null, null, 'X', null, null, 'O', null]のような配列
 */
type BoardArrType = SquareValueType[]

/**
 * @description 勝者を判定する
 */

export const calculateWinner = (squares: BoardArrType): SquareValueType => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (const line of lines) {
    const [a, b, c] = line
    // 縦・横・対角線で3つ'X'あるいは'O'が連続すれば連続したvalueを返す
    if(squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a]
    }
    return null
  }
}
