function solve(...arguments) {
    let types = {};
    for (const argument of arguments) {
        let type = typeof argument;
        if (!types[type]) {
            types[type] = 0;
        }
        types[type]++;
        console.log(`${typeof argument}: ${argument}`);
    }
    let sorted = Object.entries(types).sort((a,b) => b[1] - a[1]);
    for (const [type, value] of sorted) {
        console.log(`${type} = ${value}`);
    }
}
solve('cat', 'asd', 42, function () { console.log('Hello world!'); });