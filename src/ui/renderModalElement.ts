export const renderModalElement = (gameResult: "win" | "lose"): void => {
  const boardElement = document.querySelector(".board");
  const mainContentElement = document.querySelector(".main-content");

  if (!boardElement || !mainContentElement) {
    throw new Error("Missing HTML elements");
  }

  const modalElement = document.createElement("div");
  modalElement.className = "modal";

  if (gameResult === "lose") {
    modalElement.classList.add("modal--lose");
    modalElement.innerHTML = `
    <span class="modal-message">You lost!</span>
    <button class="modal-button" onClick="window.location.reload()">New game</button>
    `;
  }

  mainContentElement.appendChild(modalElement);
  boardElement.classList.add("disabled");
};
