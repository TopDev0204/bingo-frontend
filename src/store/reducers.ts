import { combineReducers } from "redux";

import Bingo from "./bingo/reducer";

const rootReducer = combineReducers({
  Bingo,
});

export default rootReducer;
