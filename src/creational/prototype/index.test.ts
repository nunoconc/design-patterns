import {describe, expect, test} from '@jest/globals';
import ProductA from "./ProductA";


describe('Prototype', () => {
    test('should clone product properties and not be the same instance', () => {
        const productA = new ProductA();
        const productB = productA.clone();

        expect(productA).not.toBe(productB);
        expect(productA.a).toEqual(productB.a);
        expect(productA.b).toEqual(productB.b);
    });
});
