import { BINGO_REQUEST, BINGO_SUCCESS, BINGO_ERROR } from "./actionTypes";
import { LogbookInterface } from "../../utils/typeHelper";

const INITIIAL_STATE = {
  status: false,
  data: null,
  error: null,
};

const Bingo = (
  state = INITIIAL_STATE,
  action: {
    type:
      | typeof BINGO_REQUEST
      | typeof BINGO_SUCCESS
      | typeof BINGO_ERROR;
    payload: LogbookInterface | string;
  }
) => {
  switch (action.type) {
    case BINGO_REQUEST:
      return {
        ...state,
        status: true,
        data: null,
        error: null,
      };
    case BINGO_SUCCESS:
      return {
        ...state,
        status: false,
        data: action.payload,
      };

    case BINGO_ERROR:
      return {
        ...state,
        status: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Bingo;
