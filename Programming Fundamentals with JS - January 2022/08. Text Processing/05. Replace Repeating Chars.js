function repeatingChars(str) {
    let newStr = '';
    for (let index = 0; index < str.length; index++) {
        if (str[index + 1] != str[index]) {
            newStr += str[index]
        }
    }
    console.log(newStr);
}
repeatingChars('aaaaabbbbbcdddeeeedssaa')