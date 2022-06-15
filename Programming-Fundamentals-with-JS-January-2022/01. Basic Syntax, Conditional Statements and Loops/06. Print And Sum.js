function printAndSum(a, b) {
    
    a = Number(a);
    b = Number(b);
    let printedNums = '';
    let result = 0;
    while(a <= b){
        printedNums += a + ' ';
        result += a;
        a++;
    }
    console.log(printedNums.slice(0, -1))
    console.log(`Sum: ${result}`);
}
printAndSum(5, 10)