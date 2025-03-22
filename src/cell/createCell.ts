import { Cell } from "../data/types";

export const createCell = (rowNumber: number, columnNumber: number): Cell => {
  const cell: Cell = {
    hasMine: false,
    adjacentMinesTotal: 0,
    coordinates: {
      row: rowNumber,
      column: columnNumber,
    },
  };

  return cell;
};
