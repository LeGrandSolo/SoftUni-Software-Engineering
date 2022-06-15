function solve(num) {
    num = String(num);
    let oneDigit = num[0];
    let sum = Number(num[0]);
    let isDiff = false;
    for (let i = 1; i < num.length; i++) {
        sum += Number(num[i]);
        if (num[i] != oneDigit) {
            isDiff = true;
        }
    }
    if (isDiff) {
        console.log('false');
    } else {
        console.log('true');
    }
    console.log(sum);
}