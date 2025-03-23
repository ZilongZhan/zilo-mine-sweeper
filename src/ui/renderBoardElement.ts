import { Board } from "../data/types";
import { createBoardElement } from "./createBoardElement.js";

export const renderBoardElement = (board: Board): void => {
  const mainContentElement = document.querySelector(".main-content");

  if (!mainContentElement) {
    throw new Error("Missing main content element");
  }

  const boardElement = createBoardElement(board);

  mainContentElement.innerHTML = "";
  mainContentElement.appendChild(boardElement);
};
