function solve() {
    let microelements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    let operations = { restock, prepare, report };
    let recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    return function (input) {
        let [command, p1, qua] = input.split(' ');
        qua = Number(qua);
        if (command === 'restock') {
            return operations[command].call(microelements, p1, qua);
        } else if (command === 'prepare') {
            return operations[command].call(recipies, p1, qua, microelements);
        } else {
            return operations[command].call(microelements);
        }
    }
    function restock(microelem, quantity) {
        this[microelem] += quantity;
        return 'Success'
    }
    function prepare(recipe, quantity, ingrediantObj) {
        let ingredNeeded = Object.entries(this[recipe]);
        for (const [ingred, quan] of ingredNeeded) {
            if (ingrediantObj[ingred] < quan * quantity) {
                return `Error: not enough ${ingred} in stock`;
            }
            ingrediantObj[ingred] -= quan * quantity;
        }
        return 'Success';
    }
    function report() {
        let str = '';
        for (const elem in this) {
            str += `${elem}=${this[elem]} `
        }
        return str.substring(0, str.length - 1)
    }
}
let manager = solve();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("report"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 
