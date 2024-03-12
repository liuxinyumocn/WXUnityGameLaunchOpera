class AA {
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return '123';
        }
        return null;
    }
}
const a = new AA();
console.log(a);
//# sourceMappingURL=test3.js.map