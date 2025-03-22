import { Board } from "../data/types";
import { getAdjacentMinesTotal } from "./getAdjacentMinesTotal";

export const setAdjacentMinesTotal = (board: Board): Board => {
  board.map((row) => {
    row.map((cell) => {
      cell.adjacentMinesTotal = getAdjacentMinesTotal(cell, board);
    });
  });

  return board;
};
