import { renderModalElement } from "../renderModalElement.js";

export const renderAllMineElements = (): void => {
  const cellElements = document.querySelectorAll(
    ".cell"
  ) as NodeListOf<HTMLButtonElement>;
  const mineElements = document.querySelectorAll(".mine");

  if (cellElements.length === 0 || !mineElements) {
    throw new Error("Missing HTML elements");
  }

  cellElements.forEach((cellElement) => {
    cellElement.disabled = true;
  });

  mineElements.forEach((mineElement) => {
    mineElement.classList.remove("hidden");
  });

  renderModalElement("lose");
};
