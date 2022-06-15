function topInt(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isTopInt = true;
        for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
            if(arr[rightIndex] >= arr[i]) isTopInt = false;
        }
        if (isTopInt) newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
topInt([1, 4, 3, 2])
