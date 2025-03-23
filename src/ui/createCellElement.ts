import { Cell } from "../data/types";
import { createAdjacentMinesElement } from "./createAdjacentMinesElement.js";
import { createMineElement } from "./createMineElement.js";
import { renderAllMineElements } from "./renderAllMineElements.js";
import { renderModalElement } from "./renderModalElement.js";

export const createCellElement = (cell: Cell): HTMLElement => {
  const cellWrapperElement = document.createElement("li");

  const rowNumber = cell.coordinates.row + 1;
  const columnNumber = cell.coordinates.column + 1;

  cellWrapperElement.innerHTML = `
    <button class="cell" aria-label="Row ${rowNumber} Column ${columnNumber}" type="button">
    </button>
  `;

  const cellElement = cellWrapperElement.querySelector(
    ".cell"
  ) as HTMLButtonElement;

  cellElement.addEventListener("click", () => {
    if (cell.hasMine) {
      renderAllMineElements();

      return;
    }

    cellElement.ariaLabel = `${cell.adjacentMinesTotal} adjacent mines`;

    const adjacentMinesElement = cellElement.querySelector(".adjacent-mines")!;
    adjacentMinesElement.ariaHidden = "true";
    adjacentMinesElement.classList.remove("hidden");

    const adjacentMinesElements = document.querySelectorAll(".adjacent-mines");

    const areAllCellsOpen = Array.from(adjacentMinesElements).every(
      (adjacentMinesElement) =>
        adjacentMinesElement.className === "adjacent-mines"
    );

    console.log(areAllCellsOpen);

    if (areAllCellsOpen) {
      renderModalElement("win");
    }
  });

  if (cell.hasMine) {
    cellElement.innerHTML = createMineElement();

    return cellWrapperElement;
  }

  cellElement.innerHTML = createAdjacentMinesElement(cell.adjacentMinesTotal);

  return cellWrapperElement;
};
