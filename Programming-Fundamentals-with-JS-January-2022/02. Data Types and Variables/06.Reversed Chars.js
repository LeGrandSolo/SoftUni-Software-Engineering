function reversedChars(a, b, c) {
    let combined = a + b + c;
    combined = combined.split('').reverse().join(' ')
    console.log(combined);
}
reversedChars('a', 'b', 'c' )