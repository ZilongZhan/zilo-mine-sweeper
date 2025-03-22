export const getHasMine = (chanceOfMine = 15.625): boolean => {
  return Math.random() * 100 < chanceOfMine;
};
