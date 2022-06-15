function rotate(arr, num) {
    for (let i = 0; i < num; i++) {
        const element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}