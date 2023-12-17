import { apiProductsUrl } from "../apiRoutes/apiRouterIndex";

const getProducts = async (dispatch, setProducts) => {
  try {
    const response = await fetch(apiProductsUrl);
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    console.error("Hubo un problema al obtener los productos: ", error);
  }
};
export default getProducts;
