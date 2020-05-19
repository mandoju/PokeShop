/**
 * Função utilizada para pegar a string do preço em float
 * 
 * @param price preço que irá ser mostrado
 * @param currency flag para defnir se coloca R$ na frente
 * @returns O preço em string
 */
export const getPriceString = (price: number, currency?: boolean) => {
  const priceFloat = price / 100;
  const priceString = priceFloat.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  const currencyString = currency ? 'R$' : '';

  return `${currencyString}${priceString}`;
};
