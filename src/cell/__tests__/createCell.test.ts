import { createCell } from "../factory/createCell";

describe("Given the createCell function", () => {
  describe("When it receives 1 and 2", () => {
    const cell = createCell(1, 2);

    test("Then it should return a cell with no mine", () => {
      expect(cell.hasMine).toBe(false);
    });

    test("Then it should return a mine with 0 adjacent mines", () => {
      expect(cell.adjacentMinesTotal).toBe(0);
    });

    test("Then it should return an unopened cell", () => {
      expect(cell.isOpen).toBe(false);
    });

    test("Then it should return a mine with coordinates 1 and 2", () => {
      expect(cell.coordinates).toStrictEqual({ row: 1, column: 2 });
    });
  });

  describe("When it receives 1.2 and 2.1", () => {
    test("Then it should throw error message 'Function only accepts integers'.", () => {
      const expectedErrorMessage = "Function only accepts integers.";

      expect(() => createCell(1.2, 2.1)).toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives -1 and -2", () => {
    test("Then it should throw error message 'Cell cannot have negative position.'", () => {
      const expectedErrorMessage = "Cell cannot have negative position.";

      expect(() => createCell(-1, -2)).toThrow(expectedErrorMessage);
    });
  });
});
