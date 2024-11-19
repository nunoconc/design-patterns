import {describe, expect, test} from '@jest/globals';
import Singleton from './Singleton';

describe('Singleton', () => {
    test('should return the same instance', () => {
        const instance1 = new Singleton();
        const instance2 = new Singleton();
        expect(instance1).toBe(instance2);
    });
});
