function starEnigma(input) {
    let numOfMessages = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let index = 0; index < numOfMessages; index++) {
        let decryptPattern = /[s,t,a,r]/gi;
        let decryptionKey = input[index].match(decryptPattern).length;
        let decryptedMess = '';
        for (let letter of input[index]) {
            let ascii = letter.charCodeAt() - decryptionKey;
            decryptedMess += String.fromCharCode(ascii);
        }
        let pattern = /@([A-Za-z]+)[^@\-!:>]*?:([0-9]+)[^@\-!:>]*?!(?<type>[AD])![^@\-!:>]*?->([0-9]+)/g;
        let match = pattern.exec(decryptedMess);
        while (match != null) {
            if(match.groups.type == 'A'){
                attackedPlanets.push(match[1]);
            }else if(match.groups.type == 'D'){
                destroyedPlanets.push(match[1]);
            }
            match = pattern.exec(decryptedMess);
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        console.log(`-> ${attackedPlanets.sort((a,b) => a.localeCompare(b)).join('\n-> ')}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        console.log(`-> ${destroyedPlanets.sort((a,b) => a.localeCompare(b)).join('\n-> ')}`);
    }
}
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']
)