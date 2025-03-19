export const renderMine = (cell: HTMLButtonElement) => {
  const mine = document.createElement("img") as HTMLImageElement;
  mine.classList.add("hidden");
  mine.src = "../images/dabomb.svg";
  mine.alt = "";

  cell.appendChild(mine);
};
