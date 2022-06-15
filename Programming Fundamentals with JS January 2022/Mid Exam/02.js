function coffeeLover(input) {
    let coffeeInStock = input.shift().split(' ');
    let commandNumber = Number(input.shift());
    for (let index = 0; index < commandNumber; index++) {
        let command = input[index];
        command = command.split(' ');
        switch (command[0]) {
            case 'Include':
                coffeeInStock.push(command[1]);
                break;
            case 'Remove':
                if (command[2] <= coffeeInStock.length) {
                    if (command[1] == 'first') {
                        coffeeInStock.splice(0, command[2]);
                    } else if (command[1] == 'last') {
                        coffeeInStock.splice(- command[2]);
                    }
                }
                break;
            case 'Prefer':
                let firstIndex = Number(command[1]);
                let secondIndex = Number(command[2]);
                if (firstIndex >= 0 && firstIndex < coffeeInStock.length && secondIndex >= 0 && secondIndex < coffeeInStock.length) {

                    let additionalVariable = String(coffeeInStock.splice(secondIndex, 1, coffeeInStock[firstIndex]));
                    coffeeInStock.splice(firstIndex, 1, additionalVariable);
                }
                break;
            case 'Reverse':
                let newArr = [];
                for (let i = coffeeInStock.length - 1; i >= 0; i--) {
                    newArr.push(coffeeInStock[i]);
                }
                coffeeInStock = newArr;
                break;
            default:
                break;
        }
    }
    console.log("Coffees:");
    console.log(coffeeInStock.join(' '));
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])
