function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let numOfName = 0;
    arr.forEach(element => {
        numOfName++;
        console.log(numOfName + '.' + element);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"])