import Product from "./Product";
import ProductA from "../factory-method/ProductA";
import ProductB from "../factory-method/ProductB";


abstract class Factory {
    createProductA(): Product {
        return new ProductA();
    }

    createProductB(): Product {
        return new ProductB();
    }
}


export default Factory;
