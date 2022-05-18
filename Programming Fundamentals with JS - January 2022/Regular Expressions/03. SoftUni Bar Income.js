function solve(array) {
    let totalIncome = 0;
    for (let token of array) {
        if (token == 'end of shift') {
            break;
        }
        let clientPrice = 0;
        let pattern = /%([A-Z][a-z]+)%[^$%|.]*<(\w+)>[^$%|.]*\|(\d+)\|[^$%|.]*?(\d+(?:\.\d+)?)\$/g
        let match = pattern.exec(token);
        if (match) {
            clientPrice = Number(match[3]) * Number([match[4]]);
            totalIncome += clientPrice;
            console.log(`${match[1]}: ${match[2]} - ${clientPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}