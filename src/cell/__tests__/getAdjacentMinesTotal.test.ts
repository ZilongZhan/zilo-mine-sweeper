import { Cell } from "../../data/types";
import { generateBoard } from "../../board/index.js";
import { getAdjacentMinesTotal } from "../getAdjacentMinesTotal";

describe("Given the getAdjacentMinesTotal function", () => {
  const cell: Cell = {
    hasMine: false,
    adjacentMinesTotal: 0,
    coordinates: {
      row: 2,
      column: 2,
    },
  };

  describe("When it receives a cell and a board with no mines", () => {
    test("Then it should return 0", () => {
      const board = generateBoard(5);

      const adjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(adjacentMinesTotal).toBe(0);
    });
  });

  describe("When it receives a cell and a board with a mine next to it", () => {
    test("Then it should return 1", () => {
      const board = generateBoard(5);
      board[1][2].hasMine = true;

      const adjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(adjacentMinesTotal).toBe(1);
    });
  });

  describe("When it receives a cell and a board with a mine apart from it", () => {
    test("Then it should return 0", () => {
      const board = generateBoard(5);
      board[0][0].hasMine = true;

      const adjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(adjacentMinesTotal).toBe(0);
    });
  });
});
