class A {
    constructor() {
        this.params = {
            a: {
                a1: 0,
                a2: 1,
            },
        };
        this.params = new Proxy(this.params, {
            get(target, property) {
                console.log('get');
                return target[property];
            },
            set(target, property, value) {
                console.log('set');
                console.log(target, 111, property, 111, value);
                return true;
            },
        });
    }
}
const aa = new A();
aa.params.a = { a11: 0 };
console.log(11, aa.params.a);
//# sourceMappingURL=test2.js.map