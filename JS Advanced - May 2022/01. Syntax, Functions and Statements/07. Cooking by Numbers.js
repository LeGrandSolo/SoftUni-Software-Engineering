function solve(num, ...operations) {
    num = +num;
    /* for (const operation of operations) {
        switch (operation) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'fillet':
                num *= 0.8;
                break;
            case 'bake':
                num *= 3;
                break;
            default:
                break;
        } 
    }*/
    let chop = (x) => x / 2;
    let dice = (x) => Math.sqrt(x);
    let spice = (x) => x + 1;
    let fillet = (x) => x * 0.8;
    let bake = (x) => x * 3;
    let commands = { chop, dice, spice, fillet, bake };
    for (let operation of operations) {
        num = commands[operation](num);
        console.log(num);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');