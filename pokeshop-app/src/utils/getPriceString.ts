export const getPriceString = (price: number, currency?: boolean) => {
  const priceFloat = price / 100;
  const priceString = priceFloat.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  const currencyString = currency ? 'R$' : '';

  return `${currencyString}${priceString}`;
};
