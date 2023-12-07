
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

