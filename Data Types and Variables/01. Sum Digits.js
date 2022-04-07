function sum(num) {
    numArr = String(num).split('');
    let result = 0;
    for(let i = 0; i < numArr.length; i++){
        result += Number(numArr[i]);
    }
    console.log(result);
}
sum(245678);