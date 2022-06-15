function calculator(num, operator, secNum) {
    num = Number(num)
    secNum = Number(secNum)
    let result = 0
    switch (operator) {
        case '+':
            result = num + secNum
            break;
        case '-':
            result = num - secNum
            break;
        case '*':
            result = num * secNum
            break;
        case '/':
            result = num / secNum
            break;
        default:
            break;
    }
    console.log(result.toFixed(2))
}