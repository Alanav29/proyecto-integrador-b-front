import Product from "./product-class";

const product1 = new Product({
    "title": 'Destellos  del desierto',
    "width": 150,
    "height": 170,
    "color": "yellow",
    "price": "$25,000",
    "technique": "acrylic on canvas"
});

const product2 = new Product({
    "title": 'Destellos  del desierto',
    "width": 150,
    "height": 170,
    "color": "yellow",
    "price": "$25,000",
    "technique": "acrylic on canvas"
});

const productArray = [product1, product2]

export default productArray;

