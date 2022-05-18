function perfectNum(num) {
    let isPositive = (num) => {
        if (num > 0) return true;
        else return false;
    }
    let sumOfDivisors = (num) => {
        let devisorsSum = 0;
        for(let possibleDiv = num - 1; possibleDiv > 0; possibleDiv--){
            if (!(num % possibleDiv)) {
                devisorsSum += possibleDiv;
            }
        }
        return devisorsSum;
    }
    if (isPositive(num) && sumOfDivisors(num) == num) {
       console.log("We have a perfect number!"); 
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNum(28)