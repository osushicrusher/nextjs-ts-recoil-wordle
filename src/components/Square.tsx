interface SquarePropsType {
  value: SquareValueType
  onClick: () => void
}

/**
 * @description 三目並べの升目のコンポーネント
 */

export const Square: React.FC<SquarePropsType> = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}
