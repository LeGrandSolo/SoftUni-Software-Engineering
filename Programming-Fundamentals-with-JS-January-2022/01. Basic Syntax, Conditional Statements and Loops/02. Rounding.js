function rounding(num, percision) {
    num = Number(num)
    percision = Number(percision)
    if (percision > 15) percision = 15
    num = num.toFixed(percision)
    console.log(parseFloat(num))
}
rounding(5.12342, 2)