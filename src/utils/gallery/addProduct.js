// Función para la petición POST
async function createProduct(productData) {
  try {
    const response = await fetch("http://localhost:4000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default createProduct;

/* headers: {'Content-Type': 'application/json'}: Esta línea define los encabezados HTTP que se enviarán con la solicitud.
En este caso, se está enviando un encabezado Content-Type con el valor application/json,
lo que indica que el cuerpo de la solicitud está en formato JSON.
*/

/* body: JSON.stringify(productData): Esta línea convierte el objeto productData en una cadena JSON y lo coloca en el cuerpo de la solicitud HTTP.
Esto significa que estás enviando los datos del producto al servidor en formato JSON. */

//En resumen, estas líneas están preparando una solicitud HTTP para enviar datos JSON a un servidor
