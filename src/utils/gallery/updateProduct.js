// Traemos la ruta base de la api desde el archivo apiRouterIndex que esta en utils apiRoutes
import { apiProductsUrl } from "../apiRoutes/apiRouterIndex";

// Función para la petición PUT
async function updateProduct(id, updatedData) {
  console.log(updatedData);
  let finalData = {};
  if (updatedData.title !== "") finalData.title = updatedData.title;

  if (updatedData.width !== "") finalData.width = updatedData.width;

  if (updatedData.height !== "") finalData.height = updatedData.height;
  if (updatedData.color !== "") finalData.color = updatedData.color;
  if (updatedData.price !== "") finalData.price = updatedData.price;
  if (updatedData.technique !== "") finalData.technique = updatedData.technique;
  if (updatedData.img !== "") finalData.img = updatedData.img;

  try {
    const response = await fetch(`${apiProductsUrl}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default updateProduct;

/* headers: {'Content-Type': 'application/json'}: Esta línea define los encabezados HTTP que se enviarán con la solicitud.
En este caso, se está enviando un encabezado Content-Type con el valor application/json,
lo que indica que el cuerpo de la solicitud está en formato JSON.
*/

/* body: JSON.stringify(productData): Esta línea convierte el objeto productData en una cadena JSON y lo coloca en el cuerpo de la solicitud HTTP.
Esto significa que estás enviando los datos del producto al servidor en formato JSON. */

//En resumen, estas líneas están preparando una solicitud HTTP para enviar datos JSON a un servidor
