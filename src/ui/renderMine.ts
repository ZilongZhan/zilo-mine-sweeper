import { Cell } from "../data/types";

export const renderMine = (newCell: HTMLButtonElement) => {
  const mine = document.createElement("img") as HTMLImageElement;
  mine.classList.add("hidden");
  mine.src = "../images/dabomb.svg";
  mine.alt = "";

  newCell.appendChild(mine);
};
