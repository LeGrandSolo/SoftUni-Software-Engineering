function magicSum(arr, sumOfTheTwo) {
    sumOfTheTwo = Number(sumOfTheTwo);
    newArr = []
    for (let i = 0; i < arr.length; i ++) {
        let num = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j]
            if (num + num2 == sumOfTheTwo) {
                newArr.push(num)
                newArr.push(num2)
                console.log(newArr.join(' '))
                newArr = []
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
)