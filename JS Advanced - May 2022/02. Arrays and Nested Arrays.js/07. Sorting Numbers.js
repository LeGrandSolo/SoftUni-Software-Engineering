function solve(arr) {
    let sortedDesc = [...arr].sort((a, b) => b - a);
    let sortedAsc = arr.sort((a, b) => a - b);
    let newArr = [];
    let ascIndex = 0;
    let descIndex = 0;
    for (let newIndex = 0; newIndex < sortedAsc.length; newIndex++) {
        if (newIndex % 2) {
            newArr.push(sortedDesc[descIndex]);
            descIndex++;
        }else{
            newArr.push(sortedAsc[ascIndex]);
            ascIndex++;
        }
    }
    return newArr;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));