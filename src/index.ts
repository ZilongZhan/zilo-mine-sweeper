import {
  generateBoard,
  setHasMines,
  setAdjacentMinesTotal,
} from "./game/index.js";
import { createBoardElement } from "./ui/createBoardElement.js";
import { renderBoardElement } from "./ui/renderBoardElement.js";

const board = generateBoard(10);
const hasMinesBoard = setHasMines(board);
const hasAdjacentMinesBoard = setAdjacentMinesTotal(hasMinesBoard);

const boardElement = createBoardElement(hasAdjacentMinesBoard);

renderBoardElement(boardElement);
