function matrix(num) {
    let arr = new Array(num)
    for (let index = 0; index < arr.length; index++) {
        arr[index] = num
    }
    for (let index = 0; index < arr.length; index++) {
        console.log(arr.join(' '))
    }
}
matrix(5)