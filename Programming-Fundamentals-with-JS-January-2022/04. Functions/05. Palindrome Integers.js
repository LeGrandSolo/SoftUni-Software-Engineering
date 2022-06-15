function palindrome(arr) {
    let reversedNum = (array, index) => {
        let numToArr = String(array[index]).split('');
        let numberReversed = '';
        for (let i = numToArr.length - 1; i >= 0; i--) {
            numberReversed += numToArr[i];
        }
        numberReversed = Number(numberReversed);
        return numberReversed;
    }
    for (let i = 0; i < arr.length; i++) {
        numReversed = reversedNum(arr, i);
        if (numReversed == arr[i]) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindrome([32,2,232,1010])