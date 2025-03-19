import { Cell } from "../data/types";

export const setMine = (cell: Cell, chanceOfMine = 15.625): void => {
  cell.hasMine = Math.random() * 100 < chanceOfMine;
};
