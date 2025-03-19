import { Board } from "../data/types.js";
import { renderCell } from "./renderCell.js";

export const renderBoard = (board: Board): void => {
  const gameBoard = document.querySelector(".board");

  if (!gameBoard) {
    throw new Error("Missing board element.");
  }

  board.forEach((row) => {
    const newRow = document.createElement("ul");
    newRow.classList.add("row");

    row.forEach((cell) => {
      const cellWrapper = document.createElement("li");
      const newCell = document.createElement("button");
      newCell.classList.add("cell");
      newCell.ariaLabel = "Sweep cell";

      cellWrapper.appendChild(newCell);

      renderCell(cell, newCell);
      newRow.appendChild(cellWrapper);
    });

    gameBoard.appendChild(newRow);
  });
};
