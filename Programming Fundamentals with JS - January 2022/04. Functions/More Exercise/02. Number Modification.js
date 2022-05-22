function numberModification(num) {
    function givenNumAvarageDigit(givenNum, wantedAvarage) {
        let numToArr = String(givenNum).split('');
        let sum = 0;
        let digits = 0;
        for (let i = 0; i < numToArr.length; i++) {
            sum += Number(numToArr[i]);
            digits++;
        }
        let avarage = sum / digits;
        while (avarage <= wantedAvarage) {
            numToArr.push(9);
            digits++;
            sum += 9;
            avarage = sum / digits;
        }
        console.log(numToArr.join(''));
    }
    givenNumAvarageDigit(num, 5)
}
numberModification(101)