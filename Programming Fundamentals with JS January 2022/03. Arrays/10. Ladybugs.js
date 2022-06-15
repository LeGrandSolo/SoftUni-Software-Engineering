function ladybugs(arr) {
    let fieldSize = arr.shift();
    let ladyBugIndexes = arr.shift().split(' ');
    let newArr = [];
    while (fieldSize > 0) {
        newArr.push(0);
        fieldSize--;
    }
    for (let fullSpaces = 0; fullSpaces < ladyBugIndexes.length; fullSpaces++) {
        let newArrIndex = Number(ladyBugIndexes[fullSpaces]);
        if (indexIsValid(newArr, newArrIndex)) {
            newArr[newArrIndex] = 1;
        }
    }
    for (let element of arr) {
        let movement = element.split(' ');
        let currentIndex = Number(movement[0]);
        let offset = Number(movement[2]);
        let hasMoved = false;
        if (movement[1] == 'left') {
            offset *= -1;
        }
        for (let space = 0; space < newArr.length; space++) {
            if (hasMoved) break;
            if (newArr[space] == 1 && space == currentIndex) {
                newArr[space] = 0;
                while (indexIsValid(newArr, currentIndex)) {
                    currentIndex += offset;
                    if (newArr[currentIndex] == 0) {
                        newArr[currentIndex] = 1;
                        hasMoved = true;
                        break;
                    }
                }
            }

        }
    }
    console.log(newArr.join(' '));
    function indexIsValid(array, index) {
        if (array[index] >= 0 && index < array.length) {
            return true;
        } else {
            return false;
        }
    }
}
ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']
)
ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
)
ladybugs([ 5, '3',
'3 left 2',
'1 left -2'
])
