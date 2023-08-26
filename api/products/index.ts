const getAllProducts = async () => {
  const { data, error } = await useFetch<IProduct>(
    "https://fakestoreapi.com/products",
  );
  return {
    products: data.value,
    error,
  };
};

const getProductById = async (id: string | string[]) => {
  const { data, error } = await useFetch<IProduct>(
    `https://fakestoreapi.com/products/${id}`,
    {
      key: id as string | undefined,
    },
  );
  return {
    product: data.value,
    error,
  };
};

export { getAllProducts, getProductById };
