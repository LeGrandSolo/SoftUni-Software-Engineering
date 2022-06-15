function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let timesInRowShieldBroken = 0;
    let expenses = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if(i % 2 == 0) {
            expenses += helmetPrice;
        }
        if(i % 3 == 0) {
            expenses += swordPrice;
        }
        if (i % 3 == 0 && i % 2 == 0) {
            expenses += shieldPrice;
            timesInRowShieldBroken ++;
        }
        if (timesInRowShieldBroken % 2 == 0 && timesInRowShieldBroken != 0) {
            expenses += armorPrice;
            timesInRowShieldBroken = 0
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(23,
    12.50,
    21.50,
    40,
    200    
    )