export type Coordinates = {
  row: number;
  column: number;
};

export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  coordinates: Coordinates;
};

export type Board = Cell[][];
