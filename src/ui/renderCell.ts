import { Cell } from "../data/types.js";
import { renderMine } from "./renderMine.js";

export const renderCell = (cell: Cell, newCell: HTMLLIElement): void => {
  const cellSquare = newCell.querySelector(".cell") as HTMLButtonElement;

  if (cell.hasMine) {
    renderMine(cell, cellSquare);

    return;
  }
};
