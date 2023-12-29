// async function getProduct(id) {
//     try {
//       const response = await fetch(`http://localhost:4000/api/products/${id}`);
//       const product = await response.json();
//       return product;
//     } catch (error) {
//       console.error('Error fetching product:', error);
//       throw error; // Re-throw the error for handling in a higher level
//     }
//   }
  
//   const product = await getProduct(123); // Reemplazar 123 con el ID del producto deseado
//   console.log(product);

//   async function updateProduct(id, updatedData) {
//     try {
//       const response = await fetch(`http://localhost:4000/api/products/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedData),
//       });
  
//       if (response.ok) {
//         const updatedProduct = await response.json();
//         return updatedProduct;
//       } else {
//         throw new Error('Failed to update product'); // Throw a custom error with more context
//       }
//     } catch (error) {
//       console.error('Error updating product:', error);
//       throw error; // Re-throw the error for handling in a higher level
//     }
//   }
//   const updatedData = { name: 'New Product Name', price: 19.99 }; // Datos actualizados
// const updatedProduct = await updateProduct(123, updatedData); // Reemplazar 123 con el ID del producto a actualizar
// console.log(updatedProduct);