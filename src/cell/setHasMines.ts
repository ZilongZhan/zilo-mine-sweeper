import { Board } from "../data/types.js";
import { getHasMine } from "./getHasMine.js";

export const setHasMines = (board: Board): Board => {
  board.map((row) => {
    row.map((cell) => {
      cell.hasMine = getHasMine();
    });
  });

  return board;
};
