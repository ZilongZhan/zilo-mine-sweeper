import { Cell } from "../data/types.js";
import { renderMine } from "./renderMine.js";

export const renderCell = (cell: Cell, newCell: HTMLButtonElement): void => {
  if (cell.hasMine) {
    renderMine(newCell);

    return;
  }
};
