import Product from "./Product";
import Factory from "./Factory";
import ProductA2 from "./ProductA2";
import ProductB2 from "./ProductB2";


class Factory2 implements Factory {
    createProductA(): Product {
        return new ProductA2();
    }

    createProductB(): Product {
        return new ProductB2();
    }
}

export default Factory2;
