import { generateBoard, setBoardMines } from "./game/index.js";
import { renderBoard } from "./ui/index.js";

const gameBoard = generateBoard(10);

setBoardMines(gameBoard);
renderBoard(gameBoard);
