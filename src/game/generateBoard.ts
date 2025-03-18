import { Board, Cell } from "../data/types.js";

export const generateBoard = (dimensions: number): Board => {
  const areInvalidDimensions = dimensions < 5;

  if (areInvalidDimensions) {
    throw new Error("Dimensions cannot be smaller than 5");
  }

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
