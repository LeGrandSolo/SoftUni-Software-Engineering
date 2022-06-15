function passGenerator(input) {
    let concatStr = input[0] + input[1];
    let word = input[2];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let vowel of vowels) {
        if (concatStr.includes(vowel) || concatStr.includes(vowel.toLocaleUpperCase)) {
            let reg = new RegExp(vowel, 'g')
            concatStr = concatStr.replace(reg, '*')
        }
    }
    let starIndexes = [];
    let lastIndexOfStar = 0;
    while (concatStr.indexOf('*', lastIndexOfStar) != -1) {
        starIndexes.push(concatStr.indexOf('*', lastIndexOfStar));
        lastIndexOfStar = concatStr.indexOf('*', lastIndexOfStar) + 1;
    }
    concatStr = concatStr.split('');
    let wordIndex = 0;
    for (let starIndex of starIndexes) {
        if (wordIndex >= word.length) {
            wordIndex = 0;
        }
        concatStr[starIndex] = word[wordIndex].toLocaleUpperCase()
        wordIndex++;
    }
    console.log(`Your generated password is ${concatStr.reverse().join('')}`);
}/* 
passGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]) */
passGenerator(['easymoneyeazylife',
    'atleasttencharacters',
    'absolute'])