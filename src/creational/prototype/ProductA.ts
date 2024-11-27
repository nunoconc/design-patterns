import Prototype from './Prototype';

class ProductA extends Prototype {
    constructor(source?: ProductA) {
        super(source);
    }

    clone(): Prototype {
        return new ProductA(this);
    }
}

export default ProductA;
