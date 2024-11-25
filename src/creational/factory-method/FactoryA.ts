import Product from "./Product";
import Factory from "./Factory";
import ProductA from "./ProductA";


class FactoryA implements Factory {
    createProduct(): Product {
        return new ProductA();
    }
}

export default FactoryA;
