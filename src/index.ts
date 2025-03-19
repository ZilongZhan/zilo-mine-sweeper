import { generateBoard, setBoardMines } from "./game/index.js";
import { renderBoard } from "./ui/renderBoard.js";

const gameBoard = generateBoard(10);

setBoardMines(gameBoard);
renderBoard(gameBoard);
