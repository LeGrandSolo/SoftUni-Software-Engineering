function solve() {
    let currFibNum = 1;
    let prevFibNum = 0;
    return function () {
        let next = currFibNum + prevFibNum;
        prevFibNum = currFibNum;
        currFibNum = next;
        return prevFibNum;
    };
}
let result = solve();
console.log(result());
console.log(result());
console.log(result());
console.log(result());