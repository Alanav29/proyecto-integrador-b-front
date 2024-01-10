import { apiProductsUrl } from "../apiRoutes/apiRouterIndex";

const getProduct = async (productId) => {
  try {
    const response = await fetch(`${apiProductsUrl}/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un problema al obtener el producto: ", error);
  }
};
export default getProduct;
