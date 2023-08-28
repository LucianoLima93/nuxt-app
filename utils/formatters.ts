const formatterPriceToBRL = (price: number) => {
  return `R$ ${price.toLocaleString("pt-br", {
    style: "decimal",
    minimumFractionDigits: 2,
  })}`;
};

export { formatterPriceToBRL };
