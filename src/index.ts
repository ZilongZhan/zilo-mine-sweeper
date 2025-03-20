import {
  generateBoard,
  setHasMines,
  setAdjacentMinesTotal,
} from "./game/index.js";
import { renderBoard } from "./ui/index.js";

const gameBoard = generateBoard(10);
const boardWithMines = setHasMines(gameBoard);
const boardWithAdjacentMines = setAdjacentMinesTotal(boardWithMines);

renderBoard(boardWithAdjacentMines);
