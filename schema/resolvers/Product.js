module.exports = {
  priceDiscount(product) {
    return product.discount
      ? product.price * (1 - product.discount)
      : product.price;
  },
};
