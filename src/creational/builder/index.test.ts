import {describe, expect, test} from '@jest/globals';
import Builder from "./Builder";
import Director from "./Director";


describe('Builder', () => {
    test('should easily create different products using the builder methods', () => {

        const productA = new Builder().setName('Product A').setPrice(100).setColor('Red').build();
        const productB = new Builder().setName('Product B').setPrice(200).setColor('Blue').build();

        expect(productA.name).toBe('Product A');
        expect(productB.name).toBe('Product B');
    });

    test('should easily create different product with director help', () => {
        const director = new Director();

        const product = director.construct();

        expect(product.name).toBe('Product from Director');
    });
});
