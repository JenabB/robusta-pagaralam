const formattedDollar = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export default formattedDollar;
