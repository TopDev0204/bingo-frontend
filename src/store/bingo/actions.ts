import { BINGO_REQUEST, BINGO_SUCCESS, BINGO_ERROR } from "./actionTypes";

import { LogbookInterface } from "../../utils/typeHelper";

export const vehicleRequest = () => ({
  type: BINGO_REQUEST,
  payload: {},
});

export const vehicleSuccess = (data: LogbookInterface) => ({
  type: BINGO_SUCCESS,
  payload: data,
});

export const vehicleError = (data: string) => ({
  type: BINGO_ERROR,
  payload: data,
});
