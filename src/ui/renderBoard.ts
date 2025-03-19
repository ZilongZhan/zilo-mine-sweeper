import { Board } from "../data/types.js";
import { renderCell } from "./renderCell.js";

export const renderBoard = (board: Board): void => {
  const gameBoard = document.querySelector(".board");
  const boardRow = document.querySelector(".row");
  const dummyCell = document.querySelector(".row li");

  if (!gameBoard || !boardRow || !dummyCell) {
    throw new Error("Missing required elements.");
  }

  gameBoard.innerHTML = "";
  boardRow.innerHTML = "";

  board.forEach((row) => {
    const newRow = boardRow.cloneNode(true);

    row.forEach((cell) => {
      const newCell = dummyCell.cloneNode(true) as HTMLLIElement;
      renderCell(cell, newCell);
      newRow.appendChild(newCell);
    });

    gameBoard.appendChild(newRow);
  });
};
