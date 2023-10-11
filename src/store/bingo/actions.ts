import {
  BINGO_REQUEST,
  BINGO_SUCCESS,
  BINGO_ERROR,
  BINGO_START,
} from "./actionTypes";

export const bingoStart = (data: string[]) => ({
  type: BINGO_START,
  payload: data,
});

export const bingoRequest = () => ({
  type: BINGO_REQUEST,
  payload: {},
});

export const bingoSuccess = (data: any) => ({
  type: BINGO_SUCCESS,
  payload: data,
});

export const bingoError = (data: string) => ({
  type: BINGO_ERROR,
  payload: data,
});
