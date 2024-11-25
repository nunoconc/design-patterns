import Product from "./Product";
import Factory from "./Factory";
import ProductB from "./ProductB";


class FactoryB implements Factory {
    createProduct(): Product {
        return new ProductB();
    }
}

export default FactoryB;
