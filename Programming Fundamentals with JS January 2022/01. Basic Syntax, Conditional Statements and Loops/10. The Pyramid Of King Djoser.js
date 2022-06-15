function pyramid(base, increment) {
    let marble = 0;
    let lapis = 0;
    let stone = 0; 
    let gold = 0;
    base = Number(base);
    increment = Number(increment);
    let steps;
    base % 2? steps = Math.floor(base / 2) + 1 : steps = base / 2;
    let height = Math.floor(steps * increment)
    let decBase = base;
    for(let step = 1; step <= steps; step ++){
        let dec = 0;
        dec = (decBase * 4) - 4;
        if(step == steps){
            gold = decBase * decBase;
            break;
        }
        stone += ((decBase - 2) * (decBase - 2)) * increment;
        decBase -= 2;
        step % 5 == 0? lapis += dec * increment : marble += dec * increment;

    }
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapis)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${height}
    `)
}
pyramid(12, 1)