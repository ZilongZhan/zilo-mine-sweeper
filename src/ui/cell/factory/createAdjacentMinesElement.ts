export const createAdjacentMinesElement = (
  adjacentMinesTotal: number
): string => {
  return `
        <span class="adjacent-mines hidden">${adjacentMinesTotal}</span>
        `;
};
