export const renderBoardElement = (boardElement: HTMLElement): void => {
  const mainContentElement = document.querySelector(".main-content");

  if (!mainContentElement) {
    throw new Error("Missing main content element");
  }

  mainContentElement.appendChild(boardElement);
};
