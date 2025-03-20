import {
  generateBoard,
  setHasMines,
  setAdjacentMinesTotal,
} from "./game/index.js";
import { renderBoard } from "./ui/index.js";

const board = generateBoard(10);
const hasMinesBoard = setHasMines(board);
const hasAdjacentMinesBoard = setAdjacentMinesTotal(hasMinesBoard);

renderBoard(hasAdjacentMinesBoard);
