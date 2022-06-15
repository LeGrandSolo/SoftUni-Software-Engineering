function searchForNum(array, parameters) {
    let takeElements = parameters.shift();
    let deleteElements = parameters.shift();
    let searchNum = parameters.shift();
    newArr = array.slice(0, takeElements);
    newArr.splice(0, deleteElements)
    let numberOfSearchedNum = 0;
    if (newArr.includes(searchNum)) {
        let i = -1;
        while (newArr.indexOf(searchNum, i + 1) != -1) {
            numberOfSearchedNum++;
            i = newArr.indexOf(searchNum, i + 1)
        }
    }
    console.log(`Number ${searchNum} occurs ${numberOfSearchedNum} times.`);
}
searchForNum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
)