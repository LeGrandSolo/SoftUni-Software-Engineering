function hardWord(input) {
    string = input[0];
    arr = input[1];
    let wordsLength = {};
    arr.forEach(element => {
        wordsLength[element] = element.length;
    });
    let nextIndexOfUnknown = 0;
    let lastIndexOfUnknown = 0;
    let startOfUnknownSeq;
    let endOfUnknownSeq;
    while (string.indexOf('_', nextIndexOfUnknown) != -1) {
        if (nextIndexOfUnknown == 0) {
            startOfUnknownSeq = string.indexOf('_');
        }
        lastIndexOfUnknown = string.indexOf('_', nextIndexOfUnknown - 1) + 1;
        nextIndexOfUnknown = string.indexOf('_', nextIndexOfUnknown) + 1;
        if (nextIndexOfUnknown - lastIndexOfUnknown > 1 || lastIndexOfUnknown == string.lastIndexOf('_')) {
            if (lastIndexOfUnknown == string.lastIndexOf('_')) {
                lastIndexOfUnknown++;
            }
            endOfUnknownSeq = lastIndexOfUnknown;
            for (let word in wordsLength) {
                if (wordsLength[word] == endOfUnknownSeq - startOfUnknownSeq) {
                    let leftPart = string.substring(0, startOfUnknownSeq);
                    let rigthPart = string.substring(endOfUnknownSeq);
                    string = leftPart + word + rigthPart;
                    break;
                }
            }
            startOfUnknownSeq = string.indexOf('_', nextIndexOfUnknown - 1);
        }
    }
    console.log(string);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)