export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
};

export type Board = Cell[][];
