import { apiProductsUrl } from "../apiRoutes/apiRouterIndex";

const getProducts = async (dispatch, setProducts) => {
  try {
    const response = await fetch(apiProductsUrl);
    let data = await response.json();
    data.sort(function (a, b) {
      return a.id - b.id;
    });

    dispatch(setProducts(data));
  } catch (error) {
    console.error("Hubo un problema al obtener los productos: ", error);
  }
};
export default getProducts;
