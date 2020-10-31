export const filterByCategory = (category) => (products) => {
  if (category) {
    return products.filter((product) => product.categories.includes(category));
  }

  return products;
};

export const filterByName = (query) => (products) => {
  if (query) {
    return products.filter((product) =>
      product.name.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  return products;
};
