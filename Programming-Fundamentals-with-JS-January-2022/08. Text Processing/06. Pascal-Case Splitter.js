function pascalCaseSplitter(str) {
    let currWord = [str[0]];
    let wordSeq = [];
    for (let index = 1; index < str.length; index++) {
        if (str[index].toLocaleLowerCase() == str[index]){
            currWord.push(str[index]);
        }else{
            wordSeq.push(currWord.join(''));
            currWord = [str[index]];
        }
    }
    wordSeq.push(currWord.join(''));
    console.log(wordSeq.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');