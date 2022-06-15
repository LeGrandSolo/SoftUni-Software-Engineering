function train(array) {
    let wagons = array
        .shift()
        .split(' ')
        .map(x => Number(x));
    let maxCapacity = Number(array.shift());
    for (let command of array) {
        if (command.includes('Add')) {
            command = command.split(' ');
            wagons.push(Number(command[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(command) <= maxCapacity) {
                    wagons[i] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}