function lettersChangeNumbers(str) {
    let commands = str.split(' ').filter(x => x != '');
    let alphabet = {};
    let asciiNum = 65;
    let alphabetNum = 1;
    let result = 0;
    while (asciiNum <= 90) {
        alphabet[String.fromCharCode(asciiNum)] = alphabetNum;
        asciiNum++;
        alphabetNum++;
    }
    for (let command of commands) {
        command = command.split('');
        let firstLetter = command.shift();
        let lastLetter = command.pop();
        let num = Number(command.join(''));
        if (firstLetter.toLocaleUpperCase() == firstLetter) {
            num /= alphabet[firstLetter];
        }else{
            num *= alphabet[firstLetter.toLocaleUpperCase()];
        }
        if (lastLetter.toLocaleUpperCase() == lastLetter) {
            num -= alphabet[lastLetter];
        }else{
            num += alphabet[lastLetter.toLocaleUpperCase()];
        }
        result += num;
    }
    console.log(result.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');