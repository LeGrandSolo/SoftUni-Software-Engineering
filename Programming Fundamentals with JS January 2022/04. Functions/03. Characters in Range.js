function charsInRange(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);
    let codeMax = code1;
    let codeMin = code2;
    if(code2 > code1) {
        codeMax = code2;
        codeMin = code1;
    }
    result = []
    while (codeMin < codeMax - 1){
        codeMin ++;
        result.push(String.fromCharCode(codeMin))
    }
    console.log(result.join(' '))
}
charsInRange('a',
'd'
)