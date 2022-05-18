function race(array) {
    let names = array.shift().split(', ');
    let person = {};
    names.forEach(element => {
        person[element] = 0;
    });
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /[0-9]/g
    for (let token of array) {
        if (token == 'end of race') {
            break;
        }
        let distance = 0;
        let match = token.match(namePattern).join('');
        if (person.hasOwnProperty(match)) {
            let numbers = token.match(distancePattern);
            numbers.forEach(element => {
                distance += Number(element);
            });
            person[match] += distance
        }
    }
    let sorted = Object.entries(person);
    sorted = sorted.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`);
}