import { Cell } from "../data/types";
import { createAdjacentMinesElement } from "./createAdjacentMinesElement.js";
import { createMineElement } from "./createMineElement.js";
import { gameOver } from "./gameOver.js";

export const createCellElement = (cell: Cell): HTMLElement => {
  const cellWrapperElement = document.createElement("li");

  cellWrapperElement.innerHTML = `
    <button class="cell" aria-label="Sweep cell" type="button">
    </button>
  `;

  const cellElement = cellWrapperElement.querySelector(".cell")!;

  cellElement.addEventListener("click", () => {
    if (cell.hasMine) {
      gameOver();

      return;
    }

    const adjacentMinesElement = cellElement.querySelector(".adjacent-mines")!;
    adjacentMinesElement.classList.remove("hidden");
  });

  if (cell.hasMine) {
    cellElement.innerHTML = createMineElement();

    return cellWrapperElement;
  }

  cellElement.innerHTML = createAdjacentMinesElement(cell.adjacentMinesTotal);

  return cellWrapperElement;
};
