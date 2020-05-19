export const generateRandomPrice = (min: number, max: number) => {
  const randomNumber = Math.random() * max + min;
  const roundDecimalPlaces = Math.round(randomNumber * 100);
  return roundDecimalPlaces;
};
