function add(sum) {
    const inner = (a) => {
        sum += a;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }
    return inner;
}
console.log(add(1)(21)(-5).toString())
