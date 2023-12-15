import "../../styles/galleryAdmin/galleryAdmin.css";
// import React, { useState } from "react";

const ProductListItem = ({ id, img, title, price, quantity }) => {
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        "https://generation-server-trial.onrender.com/api/products/" + id,
        { method: "DELETE" }
      ); // enviar peticion para eliminar
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error("Hubo un problema al eliminar el producto: ", error);
    }
  };

  return (
    <article className="admin-item-container">
      <div className="admin-item-section">
        <div className="product-img">
          <img className="" src={img} alt="" />
        </div>
        <div className="admin-item-description-section">
          <div className="product-description">{title}</div>
          <div className="">{quantity}</div>
          <div className="">
            <button
              onClick={() => deleteProduct(id)}
              className="bi bi-trash-fill p-0 delete-icon bg-border-none"
            ></button>
          </div>
        </div>
      </div>
      <div className="admin-item-price-section">
        <div className="">
          <i className="bi-currency-dollar"></i>
          <p className="">{price}</p>
        </div>
      </div>
    </article>
  );

  // return (
  //   <article className="d-flex admin-item-container m-4">
  //     <div className="admin-item-section d-flex">
  //       <div className="product-img">
  //         <img className="img-fluid" src={img} alt="" />
  //       </div>
  //       <div className="admin-item-description-section d-flex">
  //         <div className="product-description mx-4 my-1 d-flex align-items-center">
  //           {title}
  //         </div>
  //         <div className="mx-4 my-1 d-flex align-items-center">{quantity}</div>
  //         <div className="mx-4 my-1 d-flex align-items-center">
  //           <button
  //             onClick={() => deleteProduct(id)}
  //             className="bi bi-trash-fill p-0 delete-icon bg-border-none"
  //           ></button>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="admin-item-price-section d-flex ms-3">
  //       <div className="mx-4 my-1 d-flex align-items-center">
  //         <i className="bi bi-currency-dollar me-2"></i>
  //         <p className="m-0">{price}</p>
  //       </div>
  //     </div>
  //   </article>
  // );
};

export default ProductListItem;
