import { Cell } from "../data/types";

export const renderMine = (cell: Cell, cellSquare: HTMLButtonElement) => {
  const mine = document.createElement("img") as HTMLImageElement;
  mine.classList.add("hidden");
  mine.src = "../images/dabomb.svg";

  cellSquare.appendChild(mine);
};
