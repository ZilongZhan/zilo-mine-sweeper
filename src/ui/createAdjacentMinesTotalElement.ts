export const createAdjacentMinesTotalElement = (
  adjacentMinesTotal: number
): string => {
  return `
        <span class="cell-content hidden">${adjacentMinesTotal}</span>
        `;
};
