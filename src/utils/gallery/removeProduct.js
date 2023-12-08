import React from 'react'

const removeProduct = (product, productArray) => {
    if (product >= 0 && index < productArray.length) {
        productArray.splice(product, 1);
      } else {
        console.log('Producto fuera de rango');
      }
}

export default removeProduct