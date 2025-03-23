import { createBoard } from "./board/index.js";
import { setAdjacentMinesTotal, setHasMines } from "./cell/index.js";
import { renderBoardElement } from "./ui/index.js";

const board = createBoard(10);
const hasMinesBoard = setHasMines(board);
const hasAdjacentMinesBoard = setAdjacentMinesTotal(hasMinesBoard);

renderBoardElement(hasAdjacentMinesBoard);
