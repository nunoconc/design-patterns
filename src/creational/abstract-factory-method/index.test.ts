import {describe, expect, test} from '@jest/globals';
import Factory1 from './Factory1';
import Factory2 from "./Factory2";
import Product from "./Product";


describe('Abstract Factory Method', () => {
    test('should return the products from same instance but not same result', () => {
        const factory1 = new Factory1();
        const factory2  = new Factory2();

        const productA1 = factory1.createProductA();
        const productB1 = factory1.createProductB();
        const productA2 = factory2.createProductA();
        const productB2 = factory2.createProductB();

        expect(typeof productA1).toEqual(typeof productA2);
        expect(typeof productB1).toEqual(typeof productB2);
        expect(productA1.doStuff()).not.toEqual(productA2.doStuff());
        expect(productB1.doStuff()).not.toEqual(productB2.doStuff());
    });
});
