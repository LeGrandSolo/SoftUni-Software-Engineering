function sortBy2Criteria(arr) {
    arr.sort(sortingFn)
    function sortingFn(a, b) {
        if (a.length != b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b);
        }
    }
    console.log(arr.join('\n'));
}
sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);