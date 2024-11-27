import {describe, expect, test} from '@jest/globals';
import ObjectPool from "./ObjectPool";


describe('Object Pool', () => {
    test('should create a pool, create objects should reach max', () => {
        const pool = new ObjectPool(2);

        const obj1 = pool.create();
        const obj2 = pool.create();
        const obj3 = pool.create();


        expect(obj1).not.toBeNull();
        expect(obj2).not.toBeNull();
        expect(obj3).toBeNull();

    });

    test('should create a pool, allows object to be released', () => {
        const pool = new ObjectPool(2);

        const obj1 = pool.create();
        const obj2 = pool.create();

        pool.release(obj2);

        const obj3 = pool.reuse();

        expect(obj1).not.toBe(obj3);
        expect(obj2).toBe(obj3);
    });
});
