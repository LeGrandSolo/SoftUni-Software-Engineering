function partyTime(array) {
    let regular = new Set();
    let vip = new Set();
    let guestInList = array[0];
    while (guestInList != 'PARTY') {
        array.shift();
        guestInList = array[0];
        if (Number(guestInList[0]) % 1 !== 0) {
            regular.add(guestInList);
        } else {
            vip.add(guestInList)
        }
    }
    for (let guest of array) {
        if (regular.has(guest) || vip.has(guest)) {
            if (regular.has(guest)) {
                regular.delete(guest);
            }
            if (vip.has(guest)) {
                vip.delete(guest);
            }
        }
    }
    let peopleDidNotCame = regular.size + vip.size
    console.log(peopleDidNotCame);
    for (let guest of vip) {
        console.log(guest);
    }
    for (let guest of regular) {
        console.log(guest);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);/* 
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
) */