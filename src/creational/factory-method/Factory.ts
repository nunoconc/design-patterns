import Product from "./Product";


interface Factory {
    createProduct(): Product;
}


export default Factory;
