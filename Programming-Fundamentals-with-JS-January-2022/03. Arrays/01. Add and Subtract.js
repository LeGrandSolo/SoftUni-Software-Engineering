function addAndSubtract(input) {
    let newArr = [];
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < input.length; i++) {
        let newNum = 0;
        input[i] % 2 ? newNum = input[i] - i: newNum = input[i] + i;
        newArr.push(newNum);
    }
    for (let number of input){
        oldSum += number;
    }
    for (let number of newArr){
        newSum += number;
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])