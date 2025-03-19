import { generateBoard } from "../generateBoard";

describe("Given the generateBoard function", () => {
  describe("When it receives 5", () => {
    const dimensions = 5;
    const board = generateBoard(dimensions);

    test("Then it should return an board of rows with length 5.", () => {
      const expectedRowLength = 5;

      const rowLength = board.length;

      expect(rowLength).toBe(expectedRowLength);
    });

    test("Then it should return an board of columns with length 5.", () => {
      const expectedColumnLength = 5;

      const areAllColumnsCorrectLength = board.every(
        (row) => row.length === expectedColumnLength
      );

      expect(areAllColumnsCorrectLength).toBe(true);
    });

    test("Then it should return a board of cells with no mines.", () => {
      const haveNoMines = board.every((row) =>
        row.every((cell) => cell.hasMine === false)
      );

      expect(haveNoMines).toBe(true);
    });

    test("Then it should return a board of cells with no adjacent mines", () => {
      const haveNoAdjacentMines = board.every((row) =>
        row.every((cell) => cell.adjacentMinesTotal === 0)
      );

      expect(haveNoAdjacentMines).toBe(true);
    });
  });

  describe("When it receives 0", () => {
    test("Then it should throw error message 'Dimensions cannot be smaller than 5'.", () => {
      const dimensions = 0;

      const expectedErrorMessage = "Dimensions cannot be smaller than 5";

      expect(() => generateBoard(dimensions)).toThrow(expectedErrorMessage);
    });
  });
});
