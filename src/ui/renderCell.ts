import { Cell } from "../data/types.js";
import { renderMine } from "./renderMine.js";

export const renderCell = (
  cell: Cell,
  cellElement: HTMLButtonElement
): void => {
  if (cell.hasMine) {
    renderMine(cellElement);

    return;
  }
};
