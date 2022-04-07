function buildWall(array) {
    array = array.map(Number);
    let day = 1;
    let isDone = false;
    let totalConcrete = 0;
    let newArr = [];
    while (true) {
        let concrete = 0;
        let lowestSection = 31;
        for (let index = 0; index < array.length; index++) {
            if (array[index] < 30) {
                array[index]++;
                concrete += 195;
            }
            lowestSection = Math.min(lowestSection, array[index]);
            if (lowestSection >= 30) {
                isDone = true;
            }
        }
        totalConcrete += concrete;
        newArr.push(concrete);
        if (isDone) {
            break;
        }
    }
    console.log(newArr.join(', '));
    console.log(`${totalConcrete * 1900} pesos`);
}
buildWall([0, 0])