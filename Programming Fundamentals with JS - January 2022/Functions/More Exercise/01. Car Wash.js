function carWash(arr) {
    let carCleaness = (arr) => {
        let value = 0;
        for (let activity of arr) {
            switch (activity) {
                case 'soap':
                    value += 10;
                    break;
                case 'water':
                    value *= 1.2;
                    break;
                case 'vacuum cleaner':
                    value *= 1.25;
                    break;
                case 'mud':
                    value *= 0.9;
                    break;
                default:
                    break;
            }
        }
        return (value).toFixed(2);
    }
    console.log(`The car is ${carCleaness(arr)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])