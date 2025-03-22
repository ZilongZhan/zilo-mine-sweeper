export const gameOver = (): void => {
  const mineElements = document.querySelectorAll(".mine");

  mineElements.forEach((mineElement) => {
    mineElement.classList.remove("hidden");
  });
};
