// Traemos la ruta base de la api desde el archivo apiRouterIndex que esta en utils apiRoutes
import { apiProductsUrl } from "../apiRoutes/apiRouterIndex";

// Función para la petición DELETE
async function deleteProduct(id) {
  try {
    const response = await fetch(`${apiProductsUrl}${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default deleteProduct;
