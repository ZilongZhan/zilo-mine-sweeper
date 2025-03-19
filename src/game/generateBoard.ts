import { Board, Cell } from "../data/types.js";

export const generateBoard = (dimensions: number): Board => {
  const areInvalidDimensions = dimensions < 5;

  if (areInvalidDimensions) {
    throw new Error("Dimensions cannot be smaller than 5");
  }

  const board: Board = [];

  for (let rowNumber = 0; rowNumber < dimensions; rowNumber++) {
    board.push([]);

    for (let columnNumber = 0; columnNumber < dimensions; columnNumber++) {
      const cell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
      };

      board[rowNumber][columnNumber] = cell;
    }
  }

  return board;
};
