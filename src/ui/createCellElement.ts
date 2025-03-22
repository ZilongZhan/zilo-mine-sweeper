import { Cell } from "../data/types";
import { createAdjacentMinesTotalElement } from "./createAdjacentMinesTotalElement.js";
import { createMineElement } from "./createMineElement.js";

export const createCellElement = (cell: Cell): HTMLElement => {
  const cellWrapperElement = document.createElement("li");

  cellWrapperElement.innerHTML = `
    <button class="cell" aria-label="Sweep cell" type="button">
    </button>
  `;

  const cellElement = cellWrapperElement.querySelector(".cell")!;

  cellElement.addEventListener("click", () => {
    const cellElementChild = cellElement.querySelector(".cell-content")!;
    cellElementChild.classList.remove("hidden");
  });

  if (cell.hasMine) {
    cellElement.innerHTML = createMineElement();

    return cellWrapperElement;
  }

  cellElement.innerHTML = createAdjacentMinesTotalElement(
    cell.adjacentMinesTotal
  );

  return cellWrapperElement;
};
