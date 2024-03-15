class test4 {
    run() {
        setTimeout(() => {
            throw 'hahaha';
        }, 3000);
    }
}
try {
    new test4().run();
}
catch (e) {
    console.log('23');
}
//# sourceMappingURL=test4.js.map