import { Board, Cell } from "../data/types.js";

export const generateBoard = (dimensions: number): Board => {
  const areInvalidDimensions = dimensions < 5;

  if (areInvalidDimensions) {
    throw new Error("Dimensions cannot be smaller than 5");
  }

  const board: Board = [];

  for (let row = 0; row < dimensions; row++) {
    board.push([]);

    for (let column = 0; column < dimensions; column++) {
      const cell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
      };

      board[row][column] = cell;
    }
  }

  return board;
};
