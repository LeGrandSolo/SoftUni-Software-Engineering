function solve(input) {
    let allJuices = {};
    let juicesWithBottles = new Map;
    for (const token of input) {
        let [juice, quantity] = token.split(' => ');
        quantity = Number(quantity);
        if (!allJuices[juice]) {
            allJuices[juice] = 0;
        }
        allJuices[juice] += quantity;
        if (allJuices[juice] >= 1000) {
            juicesWithBottles.set(juice, Math.floor(allJuices[juice] / 1000));
        }
    }
    for (const [juice, bottles] of juicesWithBottles) {
        console.log(`${juice} => ${bottles}`);
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)