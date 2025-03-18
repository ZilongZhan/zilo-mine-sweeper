export const setMine = (chanceOfMine = 15.625): boolean => {
  const hasMine = Math.round(Math.random() * 100) < chanceOfMine;

  return hasMine;
};
