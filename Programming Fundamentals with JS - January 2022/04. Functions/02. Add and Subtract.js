function subtract(a, b, c) {
    result = sum(a,b) - c;
    console.log(result);
    function sum(a, b) {
        return a + b;
    }
}
subtract(23, 6, 10)