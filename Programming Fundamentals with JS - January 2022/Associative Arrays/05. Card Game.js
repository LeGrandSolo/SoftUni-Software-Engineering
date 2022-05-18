function cardGame(input) {
    let persons = {};
    let personCards = {};
    for (let player of input) {
        player = player.split(': ');
        let person = player.shift();
        player = player[0].split(', ');
        let totalScore = 0;
        for (let card of player) {
            if (!personCards.hasOwnProperty(person)) {
                personCards[person] = [];
            }
            if (personCards[person].includes(card)) {
                continue;
            }
            personCards[person].push(card);
            card = card.split('');
            let cardType = card.pop();
            card = card.join('');
            let cardScore = 0;
            if (!Number.isNaN(Number(card))) {
                cardScore += Number(card);
            } else {
                switch (card) {
                    case 'J':
                        cardScore += 11;
                        break;
                    case 'Q':
                        cardScore += 12;
                        break;
                    case 'K':
                        cardScore += 13;
                        break;
                    case 'A':
                        cardScore += 14;
                        break;
                    default:
                        break;
                }
            }
            switch (cardType) {
                case 'S':
                    cardScore *= 4;
                    break;
                case 'H':
                    cardScore *= 3;
                    break;
                case 'D':
                    cardScore *= 2;
                    break;
                case 'C':
                    cardScore *= 1;
                    break;
                default:
                    break;
            }
            totalScore += cardScore;
        }
        if (!persons.hasOwnProperty(person)) {
            persons[person] = 0;
        }
        persons[person] += totalScore;
    }
    for (let person in persons) {
        console.log(`${person}: ${persons[person]}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);