function increasingSubeset(arr) {
    let currBiggest;
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element >= currBiggest || currBiggest == undefined) {
            currBiggest = element;
            newArr.push(element);
        }
    }
    return newArr;
}
increasingSubeset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );