import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import Popup from "./Popup";
import Winner from "./Winner";
import { BingoAction } from "../store/actions";
import "./BingoCard.css";

const BingoCard: React.FC = () => {
  const dispatch = useDispatch();

  const heading = ["B", "I", "N", "G", "O"];
  const minArr = [1, 26, 41, 56, 71];
  const maxArr = [25, 40, 55, 70, 85];

  const [bingo, setBingo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [crossable, setCrossable] = useState(-1);
  const [popupLetter, setPopupLetter] = useState<string>();
  const [popupNum, setPopupNum] = useState<number>();
  const [crossedColumns, setCrossedColumns] = useState<number[]>([]);
  const [crossed, setCrossed] = useState(
    Array.from({ length: 5 * 5 }, () => false)
  );

  const generateNumber = (min: number, max: number) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  const generateNumbers = (min: number, max: number) => {
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = generateNumber(min, max);
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  };

  const handleCross = (cardIndex: number) => {
    setCrossed((prevClicked) => {
      const newClicked = [...prevClicked];
      if (crossable === cardIndex) newClicked[cardIndex] = true;
      return newClicked;
    });

    if (
      crossable === cardIndex &&
      !crossedColumns.find((one) => one === cardIndex % 5)
    )
      setCrossedColumns([...crossedColumns, cardIndex % 5]);
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < 5; i++) {
      const randomNumbers = generateNumbers(minArr[i], maxArr[i]);
      rows.push(randomNumbers);
    }
    return rows;
  };

  const [rows, setRows] = useState(generateRows());

  const handleTurn = () => {
    const index = generateNumber(0, 4);
    const num = generateNumber(minArr[index], maxArr[index]);
    const newRows = generateRows();
    setShowPopup(true);
    setPopupLetter(heading[index]);
    setPopupNum(num);
    setRows(newRows);

    let crossable = -1;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (newRows[i][j] === num) crossable = j * 5 + i;
      }
    }

    setCrossable(crossable);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  useEffect(() => {
    if (crossedColumns.length === 5) {
      setBingo(true);
    }
  }, [crossedColumns]);

  return (
    <div className="d-flex dir-col a-center bingo-card">
      <h2>Bingo Game</h2>

      {showPopup ? (
        <Popup letter={popupLetter} num={popupNum} />
      ) : (
        <button className="btn-start" onClick={handleTurn} disabled={showPopup}>
          Start
        </button>
      )}

      <table>
        <tbody>
          <tr>
            {Array.from({ length: 5 }, (_, col) => (
              <th key={col} className="header">
                <Card num={heading[col]} />
              </th>
            ))}
          </tr>
          {Array.from({ length: 5 }, (_, row) => (
            <tr key={row}>
              {Array.from({ length: 5 }, (_, col) => (
                <td key={col} onClick={() => handleCross(row * 5 + col)}>
                  <Card num={rows[col][row]} crossed={crossed[row * 5 + col]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {bingo && <Winner />}
    </div>
  );
};

export default BingoCard;
