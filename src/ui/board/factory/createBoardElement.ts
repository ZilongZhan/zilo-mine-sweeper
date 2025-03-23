import { Board } from "../../../data/types";
import { createCellElement } from "../../cell/factory/createCellElement.js";

export const createBoardElement = (board: Board): HTMLElement => {
  const boardElement = document.createElement("div");
  boardElement.className = "board";

  board.forEach((row) => {
    const rowElement = document.createElement("ul");
    rowElement.className = "row";

    row.forEach((cell) => {
      const cellWrapperElement = createCellElement(cell);

      rowElement.appendChild(cellWrapperElement);
    });

    boardElement.appendChild(rowElement);
  });

  return boardElement;
};
