function arrayManipulator(numArray, stringArray) {
    let hasPrinted = false;
    for (let command of stringArray) {
        if (hasPrinted) {
            break;
        }
        let splittedCommand = command.split(' ');
        switch (splittedCommand[0]) {
            case 'add':
                let index = splittedCommand[1];
                let element = splittedCommand[2];
                numArray.splice(index, 0, Number(element))
                break;
            case 'addMany':
                splittedCommand.shift();
                let index1 = splittedCommand.shift();
                let elements = splittedCommand.map(Number);
                for (let element of elements) {
                    numArray.splice(index1, 0, element);
                    index1++;
                }
                break;
            case 'contains':
                let element1 = splittedCommand[1];
                console.log(numArray.indexOf(Number(element1)));
                break;
            case 'remove':
                let index2 = splittedCommand[1];
                numArray.splice(index2, 1);
                break;
            case 'shift':
                let positions = splittedCommand[1];
                while (positions > 0) {
                    let newLastNum = numArray.shift();
                    numArray.push(Number(newLastNum));
                    positions--;
                }
                break;
            case 'sumPairs':
                let newArr = [];
                if (numArray.length % 2 != 0) {
                    numArray.push(0);
                }
                for (let i = 0; i < numArray.length; i += 2) {
                    let sum = numArray[i] + numArray[i + 1];
                    newArr.push(sum);
                }
                
                numArray = newArr
                break;
            case 'print':
                console.log(`[ ${numArray.join(', ')} ]`);
                hasPrinted = true;
                break;
            default:
                break;
        }
    }
}
// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
arrayManipulator([1, 2, 4, 5, 6, 7, 8]  , ['sumPairs', 'print'])