function eqSums(arr) {
    let hasSumsMatched = false;
    let rightIndex = NaN
    for (let index = 0; index < arr.length; index++) {
        let sumRight = 0;
        let sumLeft = 0;
        for (let i = index - 1; i >= 0; i--) {
            sumLeft += arr[i];
        }
        for (let j = arr.length - 1; j > index; j--) {
            sumRight += arr[j];
        }
        if (sumLeft == sumRight) {
            hasSumsMatched = true;
            rightIndex = index;
        }
    }
    if (hasSumsMatched) console.log(rightIndex);
    else console.log('no');
}
eqSums([1, 2, 3, 3])
eqSums([1, 2])
eqSums([1])
eqSums([1, 2, 3])
eqSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])