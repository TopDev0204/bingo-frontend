import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BingoAction } from "../store/actions";
import "./Home.css";

const Home = () => {
  const [num, setNum] = useState(0);
  const [users, setUsers] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNumChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const size = parseInt(e.target.value);
    let initial = [];
    for (let i = 0; i < size; i++) {
      initial.push("");
    }
    setNum(size);
    setUsers(initial);
  };

  const handleUserChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedUsers = users.map((userName, i) =>
        i === index ? e.target.value : userName
      );
      setUsers(updatedUsers);
    };

  const handleStartGame = () => {
    if (num >= 1) {
      dispatch(BingoAction.bingoStart(users as string[]));
      navigate("/bingo");
    }
  };

  return (
    <div className="d-flex dir-col j-between home">
      <p>Please type number of players</p>
      <input
        placeholder="number of players"
        value={num}
        type="number"
        onChange={handleNumChange}
      />
      {num > 0 && <p>Please type user names.</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index} className="header">
            <input
              type="text"
              placeholder="User Name"
              value={user}
              onChange={handleUserChange(index)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default Home;
