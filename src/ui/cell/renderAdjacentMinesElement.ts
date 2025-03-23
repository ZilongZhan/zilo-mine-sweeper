export const renderAdjacentMinesElement = (
  cellElement: Element,
  adjacentMinesTotal: number
): void => {
  const adjacentMinesElement = cellElement.querySelector(".adjacent-mines");

  if (!adjacentMinesElement) {
    throw new Error("Missing adjacent mines element");
  }

  cellElement.ariaLabel = `${adjacentMinesTotal} adjacent mines`;
  adjacentMinesElement.ariaHidden = "true";
  adjacentMinesElement.classList.remove("hidden");
};
