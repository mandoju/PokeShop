
/**
 * Função utilizada para gerar um preço aleatório
 * 
 * @param min valor minimo do preço que irá ser gerado
 * @param max valor máximo do preço que irá ser gerado
 * @returns Preço aleatório
 */
export const generateRandomPrice = (min: number, max: number) => {
  const randomNumber = Math.random() * max + min;
  const roundDecimalPlaces = Math.round(randomNumber * 100);
  return roundDecimalPlaces;
};
