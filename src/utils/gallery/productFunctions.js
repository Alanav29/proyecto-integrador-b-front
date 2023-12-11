//Importamos funciones add/update/remove/Produc

import addProduct from './addProduct';
import removeProduct from './removeProduct';
import updateProduct from './updateProduct';


// ================ DECLARACIÓN DE OBJETO ESTATICO =============

// Datos del producto para la petición POST, prueba HARDCODE
const newProduct = {
    title: 'La rebelión de los BB\'s',
    width: 372,
    height: 372,
    color: "amarillo america",
    technique: "Lapices Mapita Pro Plus",
    price: "$4 millones de Euros",
    img: 'hola-VV.png',
};

// ====== LLAMADA A LA FUNCIÓN DE CREAR PRODUCTO (MANDAMOS EL OBJETO ESTATICO) ======

// Llamada a la función createProduct
createProduct(newProduct);


// ====== LLAMADA A LA FUNCIÓN DE BORRAR PRODUCTO (MANDAMOS EL ID DEL PRODUCTO A BORRAR) ======

// ID del producto para la petición DELETE
const idToDelete = '6573bc2f3aafd2dfb3f899d6'; //id de ejemplo establecido por MongoDB

// Llamada a la función deleteProduct
deleteProduct(idToDelete);


// ====== LLAMADA A LA FUNCIÓN DE BORRAR PRODUCTO 
//(MANDAMOS EL ID DEL PRODUCTO A ACTULIZAR Y UN OBETO CON LOS CAMBIOS) ======

// Datos actualizados del producto y su ID para la petición PUT
const idToUpdate = '6573bc2f3aafd2dfb3f899d6'; ////id de ejemplo establecido por MongoDB
const updatedProduct = {
    color: "amarillo Andrew",
    technique: "Acuarelas Blancanieves",
    price: "$500 MXN",
};

// Llamada a la función updateProduct
updateProduct(idToUpdate, updatedProduct);

// ==================================================================================

/* 
class Product {
    #title 
    #width
    #height
    #color
    #technique
    #price
    #img

    constructor({title, width, height, color, technique, price, img}) {
        this.#title = title
        this.#width = width;
        this.#height = height;
        this.#color = color;
        this.#technique = technique;
        this.#price = price;
        this.#img = img;
    }

    get title () {
        return this.#title;
    }
    get width () {
        return this.#width;
    }
    get height () {
        return this.#height;
    }
    get color () {
        return this.#color;
    }
    get technique () {
        return this.#technique;
    }
    get price () {
        return this.#price;
    }
    get img () {
        return this.#img;
    }

}

export default Product;

 */