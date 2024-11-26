import Product from "./Product";
import Factory from "./Factory";
import ProductA1 from "./ProductA1";
import ProductB1 from "./ProductB1";


class Factory1 implements Factory {
    createProductA(): Product {
        return new ProductA1();
    }

    createProductB(): Product {
        return new ProductB1();
    }
}

export default Factory1;
