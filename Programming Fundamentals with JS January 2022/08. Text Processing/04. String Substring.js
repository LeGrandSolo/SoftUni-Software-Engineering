function stringSubstring(word, text) {
    text = text.split(' ');
    let manipulatedWord = word.toLocaleLowerCase();
    for (let singleWord of text) {
        singleWord = singleWord.toLocaleLowerCase();
        if (singleWord == manipulatedWord) {
            return word;
        }
    }
    console.log(word + ' not found!');
}
console.log(stringSubstring('javascript',
    'JavaScript is the best programming language'))