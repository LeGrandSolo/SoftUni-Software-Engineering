function rotateArr(arr) {
    let rotations = arr.pop();
    for(let i = 1; i <= rotations; i++){
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '))
}
rotateArr(['1', '2', '3', '4', '2'])