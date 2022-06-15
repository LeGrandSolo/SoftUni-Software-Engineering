function bitCoinMining(input) {
    let bitPrice = 11949.16;
    let bitCoins = 0;
    let goldPrice = 67.51;
    let money = 0;
    let firstDay = 0;
    hasCoins = false
    for (let i = 0; i < input.length; i++) {
        if ((i + 1) % 3 == 0) {
            money += (goldPrice * Number(input[i])) * 0.7;
        } else {
            money += goldPrice * Number(input[i]);
        }
        if (money >= bitPrice) {
            while (money >= bitPrice) {
                money -= bitPrice;
                bitCoins++;
            }
            if (bitCoins > 0 && hasCoins == false) {
                firstDay = i + 1;
                hasCoins = true;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitCoins}`);
    if (bitCoins > 0) console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitCoinMining([3124.15, 504.212, 2511.124])