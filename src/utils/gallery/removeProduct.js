// Función para la petición DELETE
async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}


export default deleteProduct