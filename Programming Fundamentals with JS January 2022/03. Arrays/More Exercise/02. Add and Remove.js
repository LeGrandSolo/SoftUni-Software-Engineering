function addAndRemove(arr) {
    let newArr = [];
    let addedNum = 0;
    for (let i = 0 ; i < arr.length; i++) {
        switch (arr[i]) {
            case 'add':
                addedNum++;
                newArr.push(addedNum);
                break;
            case 'remove':
                addedNum++;
                newArr.pop();
                break;

            default:
                break;
        }
    }
    if(newArr.length == 0) console.log('Empty');
    else console.log(newArr.join(' '));
}
addAndRemove(['remove', 'remove', 'remove'])