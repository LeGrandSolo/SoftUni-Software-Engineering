function modernTimesOfHashTag(str) {
    str = str.split(' ');
    for (let word of str) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.substring(1);
            let isNotOnlyLetters = false;
            for (let symbol of word) {
                if (symbol.toUpperCase() == symbol.toLowerCase()) {
                    isNotOnlyLetters = true;
                }
            }
            if (!isNotOnlyLetters){
                console.log(word);
            }
        }

    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')