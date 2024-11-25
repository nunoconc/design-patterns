import {describe, expect, test} from '@jest/globals';
import FactoryA from './FactoryA';
import FactoryB from "./FactoryB";
import Product from "./Product";


describe('Factory Method', () => {
    test('should return the products from same instance but not same result', () => {
        const productA = new FactoryA().createProduct();
        const productB = new FactoryB().createProduct();

        expect(productA).toBeInstanceOf(Product);
        expect(productB).toBeInstanceOf(Product);
        expect(typeof productA).toBe(typeof productB);
        expect(productA.doStuff()).not.toBe(productB.doStuff());
    });
});
