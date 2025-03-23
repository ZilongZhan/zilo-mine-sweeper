import { renderAllMineElements } from "./renderAllMineElements.js";
import { renderAdjacentMinesElement } from "./renderAdjacentMinesElement.js";
import { renderModalElement } from "../renderModalElement.js";
import { Cell } from "../../data/types";

export const addCellEventListener = (
  cell: Cell,
  cellElement: Element
): void => {
  cellElement.addEventListener("click", () => {
    if (cell.hasMine) {
      renderAllMineElements();

      return;
    }

    renderAdjacentMinesElement(cellElement, cell.adjacentMinesTotal);

    const adjacentMinesElements = document.querySelectorAll(".adjacent-mines");
    const areAllCellsOpen = Array.from(adjacentMinesElements).every(
      (adjacentMinesElement) =>
        adjacentMinesElement.className === "adjacent-mines"
    );

    if (areAllCellsOpen) {
      renderModalElement("win");
    }
  });
};
