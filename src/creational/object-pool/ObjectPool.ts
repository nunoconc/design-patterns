
class ObjectPool<T> {

    private readonly maxSize: number;
    private pool: T[];

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.pool = [];
    }

    createObject(): T {
        return {
            field1: 'value',
            field2: 'value2'
        } as T
    }

    // Create a new object and add it to the pool
    create(): T | null {
       if(this.pool.length < this.maxSize) {
           const obj = this.createObject();
           this.pool.push(obj);
           return obj;
       } else {
           console.log('Pool is full. Cannot create new object');
           return null;
       }
    }

    // Reuse an object from the pool
    reuse(): T | null {
        if(this.pool.length > 0) {
            // Reuse an object from the pool
            return this.pool.pop() as T;
        } else {
            // Pool is empty, cannot reuse an object
            console.log('Pool is empty. Cannot reuse object');
            return null;
        }
    }

    // Release an object back to the pool
    release(obj: T) {
        // Release the object back to the pool for reuse
        this.pool.push(obj);
    }
}

export default ObjectPool;
