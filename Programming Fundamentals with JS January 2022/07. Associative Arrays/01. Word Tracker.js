function wordsTracker(input) {
    let wantedWords = input.shift();
    wantedWords = wantedWords.split(' ');
    let wantedWordsOccurances = {};
    for (let word of wantedWords) {
        wantedWordsOccurances[word] = 0;
    }
    for (let word of input){
        if(wantedWordsOccurances.hasOwnProperty(word)){
            wantedWordsOccurances[word]++;
        }
    }
    let sorted = Object.entries(wantedWordsOccurances);
    sorted.sort((a, b) => {
        a = a[1];
        b = b[1];
        return b - a;
    })
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}