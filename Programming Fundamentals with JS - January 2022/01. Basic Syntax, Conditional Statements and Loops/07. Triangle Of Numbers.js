function triangleOfNums(num) {
    num = Number(num);
    for (let n = 1; n <= num; n++){
        let printNum = ''
        for (let j = 1; j <= n; j++) {
            printNum += n
            if (j != n) printNum += " "
        }
        console.log(printNum);
    }
}
triangleOfNums(4)