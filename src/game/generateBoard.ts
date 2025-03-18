import { Board } from "../data/types.js";
import { Cell } from "../data/types.js";

export const generateBoard = (dimensions: number): Board => {
  let newBoard: Board = [];

  for (let row = 0; row < dimensions; row++) {
    newBoard.push([]);

    for (let column = 0; column < dimensions; column++) {
      const newCell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
      };

      newBoard[row][column] = newCell;
    }
  }

  return newBoard;
};
