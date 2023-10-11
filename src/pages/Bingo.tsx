import { useSelector } from "react-redux";
import BingoCard from "../components/BingoCard";
import { RootState } from "../utils/typeHelper";

const Bingo = () => {
  const { players } = useSelector(
    (state: RootState) => ({
      players: state.Bingo.players,
    }),
    (prevData, newData) => prevData.players === newData.players
  );

  return (
    <div className="d-flex j-between">
      {players?.map((player, index) => (
        <BingoCard player={player} key={index} />
      ))}
    </div>
  );
};

export default Bingo;
