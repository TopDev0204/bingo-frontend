import {
  BINGO_REQUEST,
  BINGO_SUCCESS,
  BINGO_ERROR,
  BINGO_START,
} from "./actionTypes";

const INITIIAL_STATE = {
  status: false,
  data: null,
  error: null,
  players: [],
};

const Bingo = (
  state = INITIIAL_STATE,
  action: {
    type:
      | typeof BINGO_REQUEST
      | typeof BINGO_SUCCESS
      | typeof BINGO_ERROR
      | typeof BINGO_START;
    payload: string[] | string;
  }
) => {
  switch (action.type) {
    case BINGO_START:
      return {
        ...state,
        status: false,
        data: null,
        error: null,
        players: action.payload,
      };

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
