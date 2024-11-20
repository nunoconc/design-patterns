import Builder from "./Builder";


export default class Director {
    constructor() {
        this.builder = new Builder();
    }
    private readonly builder: Builder;

    construct() {
        return this.builder.setName('Product from Director').setPrice(100).setColor('red').build();
    }
}
