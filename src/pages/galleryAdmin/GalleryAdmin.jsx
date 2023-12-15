import { useState, useEffect } from "react";
import ProductListItem from "../../components/galleryAdmin/ProductListItem";

function GalleryAdmin() {
  const [productsArray, setProductsArray] = useState([]); // se hizo hook para modificar el elemento productsarray;
  useEffect(() => {
    // se creo un hook de tipo useEffect, para actualizar mi productsArray
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://generation-server-trial.onrender.com/api/products"
        ); // se hizo una peticion al backend para pedir datos.
        const data = await response.json();
        setProductsArray(data); //  guardar los productos de la peticion en productsArray
        console.log(data);
      } catch (error) {
        console.error("Hubo un problema al obtener los productos: ", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="product-properties">
              <label>Nombre</label>
              <label>Cantidad</label>
              <label>Precio</label>
            </div>
          </div>
        </div>
      </div> */}
      <div className="product-properties">
        <label>Imagen</label>
        <label>Titulo</label>
        <label>Cantidad</label>
        <label>Precio</label>
      </div>
      {productsArray.map((product, index) => (
        <ProductListItem // se muestran los productos en el componente,ProductListItem
          id={product._id}
          title={product.title}
          img={product.img}
          price={product.price}
          quantity={1}
          key={product._id}
        />
      ))}
    </>
  );
}

export default GalleryAdmin;
