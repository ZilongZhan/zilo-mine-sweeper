import { generateBoard } from "../generateBoard";

describe("Given the generateBoard function", () => {
  describe("When it receives 5", () => {
    test("Then it should return an array of Cell arrays of length 5 each, with no mines and no adjacent mines", () => {
      const dimensions = 5;
      const expectedBoard = [
        [
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
        ],
        [
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
        ],
        [
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
        ],
        [
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
        ],
        [
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
          { hasMine: false, adjacentMinesTotal: 0 },
        ],
      ];

      const board = generateBoard(dimensions);

      expect(board).toStrictEqual(expectedBoard);
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
