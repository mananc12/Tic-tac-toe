import { useState } from "react";

export default function App() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    for (let logic of win) {
      const [a, b, c] = logic;
      if (arr[a] !== null && arr[a] === arr[b] && arr[a] === arr[c])
        return arr[a] + " is winner!";
    }
    return false;
  };

  const isWinner = checkWin();

  const Arr2 = (props) => {
    const handleClick = () => {
      const newArr = [...arr];
      newArr[props.index] = isXTurn ? "X" : "O";
      setArr(newArr);
      setIsXTurn(!isXTurn);
    };

    return (
      <div className="box" onClick={handleClick}>
        <div className="symbol">{arr[props.index]}</div>
      </div>
    );
  };

  // };
  return (
    <div>
      <div className="container">
        {arr.map((item, index) => (
          <Arr2 key={index} index={index} />
        ))}
      </div>
      <h1>{isWinner}</h1>
    </div>
  );
}
