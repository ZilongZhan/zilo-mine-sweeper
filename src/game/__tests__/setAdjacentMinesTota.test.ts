import { generateBoard } from "../generateBoard";
import { setAdjacentMinesTotal } from "../setAdjacentMinesTotal";

describe("Given the getAdjacentMinesTotal function", () => {
  describe("When given a board of cells with 0 mines", () => {
    test("Then it should return a board of cells with 0 adjacent mines", () => {
      const board = generateBoard(5);

      const hasNoAdjacentMines = board.every((row) =>
        row.every((cell) => cell.adjacentMinesTotal === 0)
      );

      expect(hasNoAdjacentMines).toBe(true);
    });
  });

  describe("When given a board with 1 mine in the middle", () => {
    test("Then it should return a board with 8 cells with 1 adjacent mine.", () => {
      const board = generateBoard(5);
      board[2][2].hasMine = true;

      const hasAdjacentMinesBoard = setAdjacentMinesTotal(board);
      const cells = hasAdjacentMinesBoard.flat();

      const haveAdjacentMineCellsTotal = cells.reduce(
        (accumulator, currentCell) =>
          accumulator + currentCell.adjacentMinesTotal,
        0
      );

      expect(haveAdjacentMineCellsTotal).toBe(8);
    });
  });

  describe("When given a board with 1 mine in a corner", () => {
    test("Then it should return a board with 3 cells with 1 adjacent mine.", () => {
      const board = generateBoard(5);
      board[0][0].hasMine = true;

      const hasAdjacentMinesBoard = setAdjacentMinesTotal(board);
      const cells = hasAdjacentMinesBoard.flat();

      const haveAdjacentMineCellsTotal = cells.reduce(
        (accumulator, currentCell) =>
          accumulator + currentCell.adjacentMinesTotal,
        0
      );

      expect(haveAdjacentMineCellsTotal).toBe(3);
    });
  });
});
