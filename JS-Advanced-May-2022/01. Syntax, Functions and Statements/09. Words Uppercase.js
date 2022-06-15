function solve(string) {
    let pattern = /\w+/g;
    let matched = string.match(pattern);
    let finalStr = '';
    for (let word of matched) {
        word = word.toLocaleUpperCase();
        finalStr += word + ', ';
    }
    finalStr = finalStr.slice(0, -2);
    console.log(finalStr);
}
solve('Hi, how are you?');