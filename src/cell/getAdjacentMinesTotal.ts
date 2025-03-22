import { Board, Cell, Coordinates } from "../data/types";

export const getAdjacentMinesTotal = (cell: Cell, board: Board): number => {
  const coordinates = cell.coordinates;
  let adjacentMinesTotal = 0;

  const positionsToCheck: Coordinates[] = [
    { row: coordinates.row, column: coordinates.column - 1 },
    { row: coordinates.row - 1, column: coordinates.column - 1 },
    { row: coordinates.row - 1, column: coordinates.column },
    { row: coordinates.row - 1, column: coordinates.column + 1 },
    { row: coordinates.row, column: coordinates.column + 1 },
    { row: coordinates.row + 1, column: coordinates.column + 1 },
    { row: coordinates.row + 1, column: coordinates.column },
    { row: coordinates.row + 1, column: coordinates.column - 1 },
  ];

  positionsToCheck.forEach((position) => {
    const positionExists =
      position.row < board.length &&
      position.row >= 0 &&
      position.column < board.length &&
      position.column >= 0;

    if (positionExists) {
      const hasMine = board[position.row][position.column].hasMine;

      if (hasMine) {
        adjacentMinesTotal++;
      }
    }
  });

  return adjacentMinesTotal;
};
