import { Cell } from "../../data/types";

export const createCell = (rowNumber: number, columnNumber: number): Cell => {
  if (!Number.isInteger(rowNumber) || !Number.isInteger(columnNumber)) {
    throw new Error("Function only accepts integers.");
  }

  if (rowNumber < 0 || columnNumber < 0) {
    throw new Error("Cell cannot have negative position.");
  }

  const cell: Cell = {
    hasMine: false,
    adjacentMinesTotal: 0,
    isOpen: false,
    coordinates: {
      row: rowNumber,
      column: columnNumber,
    },
  };

  return cell;
};
