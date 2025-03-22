import { generateBoard } from "./board/index.js";
import { setAdjacentMinesTotal, setHasMines } from "./cell/index.js";
import { createBoardElement, renderBoardElement } from "./ui/index.js";

const board = generateBoard(10);
const hasMinesBoard = setHasMines(board);
const hasAdjacentMinesBoard = setAdjacentMinesTotal(hasMinesBoard);

const boardElement = createBoardElement(hasAdjacentMinesBoard);

renderBoardElement(boardElement);
