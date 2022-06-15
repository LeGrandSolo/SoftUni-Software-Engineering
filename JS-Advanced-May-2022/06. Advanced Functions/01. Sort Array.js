function solve(array, param) {
    let isAsc = (param) => param === 'asc' ? true : false;
    return isAsc(param) ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));