function houseParty(array) {
    let list = [];
    for (let person of array) {
        person = person.split(' ');
        if (person[2] != 'not') {
            if (list.includes(person[0])) {
                console.log(`${person[0]} is already in the list!`);
            } else {
                list.push(person[0]);
            }
        } else {
            if (list.includes(person[0])) {
                list.splice(list.indexOf(person[0]), 1)
            } else {
                console.log(`${person[0]} is not in the list!`);
            }
        }
    }
    for(let eachGuest of list){
        console.log(eachGuest);
    }
}