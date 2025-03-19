import { Board } from "../data/types.js";
import { setMine } from "./setMine.js";

export const setBoardMines = (board: Board): void => {
  board.forEach((row) => {
    row.forEach((cell) => setMine(cell));
  });
};
