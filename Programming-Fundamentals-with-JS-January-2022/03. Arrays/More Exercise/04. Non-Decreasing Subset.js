function nonDecreasingSubset(arr) {
    let currentBiggest = 0;
    let newArr = [];
    for (let num of arr) {
        if (num >= currentBiggest){
            currentBiggest = num;
            newArr.push(currentBiggest);
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])