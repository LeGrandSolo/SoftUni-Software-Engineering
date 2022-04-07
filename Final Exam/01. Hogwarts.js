function hogwards(input) {
    let spellToDecipher = input.shift();
    let command = input.shift().split(' ');
    while (command[0] != 'Abracadabra') {
        if (command[0] == 'Abjuration') {
            spellToDecipher = spellToDecipher.toLocaleUpperCase();
            console.log(spellToDecipher);
        } else if (command[0] == 'Necromancy') {
            spellToDecipher = spellToDecipher.toLocaleLowerCase();
            console.log(spellToDecipher);
        } else if (command[0] == 'Illusion') {
            spellToDecipher = spellToDecipher.split('');
            if (spellToDecipher[Number(command[1])] != undefined) {
                spellToDecipher.splice(Number(command[1]), 1, command[2]);
                console.log('Done!');
            } else {
                console.log("The spell was too weak.");
            }
            spellToDecipher = spellToDecipher.join('');
        } else if (command[0] == 'Divination') {
            let firstSubstr = command[1];
            let secondSubstr = command[2];
            let regex = new RegExp(firstSubstr, 'g');
            spellToDecipher =spellToDecipher.replace(regex, secondSubstr);
            console.log(spellToDecipher);
        } else if (command[0] == 'Alteration') {
            let substrToRemove = command[1];
            spellToDecipher = spellToDecipher.substring(0, spellToDecipher.indexOf(substrToRemove)) + spellToDecipher.substring(spellToDecipher.indexOf(substrToRemove) + substrToRemove.length);
            console.log(spellToDecipher);
        } else {
            console.log("The spell did not work!");
        }
        command = input.shift().split(' ');
    }
}
hogwards(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])
console.log('---------');
hogwards(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"])
console.log('--------');
hogwards(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])
hogwards(['aaaaaaaaaabbbbbbbbb', 'Divination a b', "Abracadabra"])

