function oddEvenSum(number) {
    let arr = String(number).split('')
    let oddSum = 0
    let evenSum = 0
    for (let num of arr) {
        num = Number(num)
        num % 2 ? oddSum += num : evenSum += num
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddEvenSum(1000435)