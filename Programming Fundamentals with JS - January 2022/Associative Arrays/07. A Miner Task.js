function minerTask(array) {
    let resorces = {};
    for (let index = 0; index < array.length; index += 2) {
        if (!resorces.hasOwnProperty(array[index])) {
            resorces[array[index]] = 0;
        }
        resorces[array[index]] += Number(array[index + 1]);
    }
    for (let resorce in resorces) {
        console.log(`${resorce} -> ${resorces[resorce]}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )