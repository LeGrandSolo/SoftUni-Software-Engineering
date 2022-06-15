function bossRush(input) {
    let numberOfInputs = Number(input.shift());
    for (let index = 0; index < numberOfInputs; index++) {
        let token = input[index];
        let pattern = /\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/g;
        let match = pattern.exec(token)
        if (match != null) {
            console.log(`${match[1]}, The ${match[2]}\n>> Strength: ${match[1].length}\n>> Armor: ${match[2].length}`);
        }else{
            console.log("Access denied!");
        }
    }
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
console.log('--------');
bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])