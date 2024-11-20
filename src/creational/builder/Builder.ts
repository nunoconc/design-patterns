import {Product} from "./Product";


export default class Builder {

    constructor() {
        this.product = new Product();
    }

    private readonly product : Product;

    setName(name : string) {
        this.product.name = name;
        return this;
    }

    setPrice(price : number) {
        this.product.price = price;
        return this;
    }

    setColor(color : string) {
        this.product.color = color;
        return this;
    }

    build() {
        return this.product;
    }
}
