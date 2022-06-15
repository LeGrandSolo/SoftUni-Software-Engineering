function solve(arr) {
    let num = 0;
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        num++;
        if (arr[index] == 'add') {
            newArr.push(num);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length) {
        console.log(newArr.join('\n'));
    }else{
        console.log('Empty');
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);