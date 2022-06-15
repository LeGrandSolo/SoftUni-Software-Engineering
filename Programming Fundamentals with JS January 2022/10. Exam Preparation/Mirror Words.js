function mirrorWords(string) {
    let mirrors = {};
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
    let match = pattern.exec(string);
    let timesMatched = 0;
    while (match != null) {
        timesMatched++;
        if (match[2] == match[3].split('').reverse().join('')) {
            mirrors[match[2]] = match[3];
        }
        match = pattern.exec(string);
    }
    if (timesMatched > 0) {
        console.log(timesMatched + ' word pairs found!');
    }else{
        console.log('No word pairs found!');
    }
    let str = '';
    for (let word in mirrors) {
        str += `${word} <=> ${mirrors[word]}, `;
    }
    if (Object.keys(mirrors).length > 0) {
        console.log('The mirror words are:');
        console.log(str.substring(0, str.length - 2));
    }else{
        console.log('No mirror words!');
    }
}