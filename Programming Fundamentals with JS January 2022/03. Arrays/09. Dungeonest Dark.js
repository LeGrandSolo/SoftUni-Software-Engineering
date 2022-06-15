function dungeonestDark(rooms) {
    let health = 100;
    let coins = 0;
    rooms = rooms.join('').split('|');
    let isDead = false;
    //['rat 10', 'bat 20', 'potion 10', 'rat 10', 'chest 100', 'boss 70', 'chest 1000']
    for (let j = 0; j < rooms.length; j++) {
        let eachRoom = rooms[j];
        eachRoom = eachRoom.split(' ');
        /* ['rat', '10']
           ['bat', '20'] */
        let amount = Number(eachRoom[1]);
        switch (eachRoom[0]) {
            case 'potion':
                health += amount;
                health > 100 ? (console.log(`You healed for ${amount - (health - 100)} hp.`), health = 100) : console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += amount;
                console.log(`You found ${amount} coins.`);
                break;
            default:
                health -= amount;
                health > 0 ?  console.log( `You slayed ${eachRoom[0]}.`): (console.log(`You died! Killed by ${eachRoom[0]}.`), isDead = true);
                break;
        }
        if (isDead) {
            console.log(`Best room: ${j + 1}`);
            break;
        }
    }
    if (!isDead) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])