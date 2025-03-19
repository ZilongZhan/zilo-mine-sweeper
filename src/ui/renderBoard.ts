import { Board } from "../data/types.js";
import { renderCell } from "./renderCell.js";

export const renderBoard = (board: Board): void => {
  const gameBoard = document.querySelector(".board") as HTMLElement;
  const boardRow = document.querySelector(".row") as HTMLUListElement;
  const dummyCell = document.querySelector(".row li") as HTMLLIElement;
  gameBoard.innerHTML = "";
  boardRow.innerHTML = "";

  board.forEach((row) => {
    const newRow = boardRow.cloneNode(true) as HTMLLIElement;

    row.forEach((cell) => {
      const newCell = dummyCell.cloneNode(true) as HTMLLIElement;
      renderCell(cell, newCell);
      newRow.appendChild(newCell);
    });

    gameBoard.appendChild(newRow);
  });
};
