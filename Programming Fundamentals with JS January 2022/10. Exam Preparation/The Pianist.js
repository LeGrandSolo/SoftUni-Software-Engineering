function pianist(input) {
    let numOfPieces = Number(input.shift());
    let commands = { add, remove, changeKey };
    let pieces = {};
    for (let i = 0; i < numOfPieces; i++) {
        let [pieceName, composer, key] = input.shift().split('|');
        pieces[pieceName] = { pieceName: pieceName, composer: composer, key: key }
    }
    let command = input.shift();
    while (command != 'Stop') {
        let [commandName, p1, p2, p3] = command.split('|');
        commandName = commandName[0].toLocaleLowerCase() + commandName.substring(1);
        commands[commandName](pieces, p1, p2, p3);
        command = input.shift();
    }
    for (let piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
    }
    function add(obj, pieceName, composer, key) {
        if (!obj.hasOwnProperty(pieceName)) {
            obj[pieceName] = { pieceName: pieceName, composer: composer, key: key };
            console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${pieceName} is already in the collection!`);
        }
    }
    function remove(obj, pieceName) {
        if (obj.hasOwnProperty(pieceName)) {
            delete obj[pieceName];
            console.log(`Successfully removed ${pieceName}!`);
        } else {
            console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
        }
    }
    function changeKey(obj, pieceName, newKey) {
        if (obj.hasOwnProperty(pieceName)) {
            obj[pieceName].key = newKey;
            console.log(`Changed the key of ${pieceName} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
        }
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)
console.log('---');
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)