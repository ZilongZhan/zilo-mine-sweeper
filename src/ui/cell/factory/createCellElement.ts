import { createAdjacentMinesElement } from "./createAdjacentMinesElement.js";
import { createMineElement } from "./createMineElement.js";
import { addCellEventListener } from "../addCellEventListener.js";
import { Cell } from "../../../data/types.js";

export const createCellElement = (cell: Cell): HTMLElement => {
  const cellWrapperElement = document.createElement("li");
  const rowNumber = cell.coordinates.row + 1;
  const columnNumber = cell.coordinates.column + 1;

  cellWrapperElement.innerHTML = `
  <button class="cell color${cell.adjacentMinesTotal}" aria-label="Row ${rowNumber} Column ${columnNumber}" type="button">
  </button>
  `;

  const cellElement = cellWrapperElement.querySelector(".cell") as HTMLElement;
  addCellEventListener(cell, cellElement);

  if (cell.hasMine) {
    cellElement.innerHTML = createMineElement();
    return cellWrapperElement;
  }

  cellElement.innerHTML = createAdjacentMinesElement(cell.adjacentMinesTotal);
  return cellWrapperElement;
};
