// import "../../styles/galleryAdmin/galleryAdmin.css";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/galleryAdmin/productListItem.css";

import deleteProduct from "../../utils/gallery/deleteProduct";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/productsFeature";
import { selectUser } from "../../features/userFeature";

const ProductListItem = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const delItem = () => {
    deleteProduct(product.id, user.token);
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="d-flex gallery-admin-item my-2">
      <div className="gallery-admin-item-img">
        <img
          src={product.img}
          className=""
          alt={`Fotografía del cuadro con nombre ${product.title}`}
        />
      </div>
      <div className="d-flex flex-wrap flex-row mx-3 py-2 align-items-center justify-content-between gallery-admin-item-body">
        <div className="fs-5 overflow-hidden">
          <p className="fw-bold mb-1">{product.title}</p>
          <p className="fs-6 mb-0">
            {product.width}X{product.height}
          </p>
        </div>

        <p className="fs-5 fw-semibold me-4 text-black-50 mb-0">
          {`$ ${product.price}`}
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <button onClick={delItem} className="fs-5 mx-3 my-auto delete-item-btn">
          <i className="bi bi-trash3-fill"></i>
        </button>
        <Link
          className="fs-5 mx-3 my-auto edit-item-btn"
          to={`/editProduct/${product.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProductListItem;
