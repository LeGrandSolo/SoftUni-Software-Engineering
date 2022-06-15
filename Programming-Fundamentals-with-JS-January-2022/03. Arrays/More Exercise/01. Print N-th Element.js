function printNthElement(arr) {
    let nStep = Number(arr[arr.length - 1]);
    let newArr = [];
    for (let i = 0; i < arr.length - 1 ; i += nStep) {
       newArr.push(arr[i]);
    }
    console.log(newArr.join(' '))
}
printNthElement(['5', '20', '31', '4', '20', '2'])