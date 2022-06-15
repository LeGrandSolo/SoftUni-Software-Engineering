function factorialDivision(num1, num2) {
    let factorial = (num) =>{
        let fact = 1;
        for (let index = num; index > 1; index--) {
            fact *= index;
        }
        return fact;
    }
    let firstFact = factorial(num1);
    let secondFact = factorial(num2);
    console.log((firstFact / secondFact).toFixed(2))
}
factorialDivision(6, 2)