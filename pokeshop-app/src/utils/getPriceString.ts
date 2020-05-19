export const getPriceString = (price: number, currency?: boolean) => {
  const priceFloat = price / 100;
  const priceString = priceFloat.toLocaleString();
  const currencyString = currency ? 'R$' : '';

  return `${currencyString}${priceString}`;
};
