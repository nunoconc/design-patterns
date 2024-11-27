abstract class Prototype {
    a: string;
    b: string;

    protected constructor(source?: Prototype) {
        if (source) {
            this.a = source.a;
            this.b = source.b;
        } else {
            this.a = 'a';
            this.b = 'b';
        }
    }

    abstract clone(): Prototype;
}

export default Prototype;
