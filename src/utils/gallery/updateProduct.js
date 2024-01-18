// Traemos la ruta base de la api desde el archivo apiRouterIndex que esta en utils apiRoutes
import { apiProductsUrl } from "../apiRoutes/apiRouterIndex";

// Función para la petición PUT
async function updateProduct(id, updatedData) {
  let finalData = {};
  finalData.id = id;
  finalData.title = updatedData.title;

  if (updatedData.width !== "") finalData.width = parseInt(updatedData.width);
  else finalData.width = 0;

  if (updatedData.height !== "")
    finalData.height = parseInt(updatedData.height);
  else finalData.height = 0;
  finalData.color = updatedData.color;
  if (updatedData.price !== "") finalData.price = parseInt(updatedData.price);
  else finalData.price = 0;

  finalData.technique = updatedData.technique;
  finalData.img = updatedData.img;

  finalData.active = true;

  console.log(finalData);

  try {
    const response = await fetch(`${apiProductsUrl}/${id}`, {
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
