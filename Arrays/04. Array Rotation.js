function arrRotation(array, rotations) {
    let newArr = [];
    if (rotations >= array.length) rotations = rotations - Math.floor(rotations / array.length) * array.length 
    for (let i = rotations; i < array.length; i++) {
        newArr.push(array[i])
    }
    for (let i = 0; i < rotations; i++) {
        newArr.push(array[i])
    }
    console.log(newArr.join(' '))
}
arrRotation([2, 4, 15, 31],5)