function distinctArray(array) {
    let distinctArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!(distinctArr.includes(array[i]))) {
            distinctArr.push(array[i]);
        }
    }
    console.log(distinctArr.join(' '));
}