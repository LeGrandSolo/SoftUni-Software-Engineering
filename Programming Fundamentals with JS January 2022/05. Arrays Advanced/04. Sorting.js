function sorting(array) {
    let newArr = [];
    let arrAscending = (array.sort((a, b) => a - b)).join(' ');
    let arrDescending = array.sort((a, b) => b - a);
    let ascendingIndex = 0;
    let descendingIndex = 0;
    arrAscending = arrAscending
    .split(' ')
    .map(x => Number(x));
    for(let i = 0; i < array.length; i++){
        if(i % 2){
            newArr.push(arrAscending[ascendingIndex]);
            ascendingIndex++;
        }else{
            newArr.push(arrDescending[descendingIndex]);
            descendingIndex++;
        }
    }
    console.log(newArr.join(' '));
}