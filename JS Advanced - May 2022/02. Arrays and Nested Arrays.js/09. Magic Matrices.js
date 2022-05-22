function magicMatrices(matrix) {
    let rowsFnOutput = checkIfRowsAreSame(matrix);
    if (!rowsFnOutput[0]) {
        return false;
    }
    let sum = rowsFnOutput[1];
    if (!checkIfColmsAreSame(matrix, sum)) {
        return false;
    }
    return true;
    function checkIfRowsAreSame(matrix) {
        let sum;
        let lastSum;
        for (const array of matrix) {
            sum = array.reduce((a, v) => a += v, 0);
            if (lastSum != sum && lastSum != undefined) {
                return [false, sum];
            }
            lastSum = sum;
        }
        return [true, sum]
    }
    function checkIfColmsAreSame(matrix, sum) {
        let lastSum = 0;
        let row = 0;
        let hasRepeated = false;
        for (let col = 0; col < matrix.length; col++) {
            if (hasRepeated) {
                col--;
            }
            hasRepeated = false;
            lastSum += matrix[col][row];
            if (col == matrix.length - 1 && row < matrix[0].length) {
                if (lastSum != sum && lastSum != undefined) {
                    return false;
                }
                col = 0;
                row++;
                hasRepeated = true;
                lastSum = 0;
            }
        }
        return true;
    }
}
console.log(magicMatrices([
    [4, 5, 6],
    [5, 5, 5],
    [5, 5, 5]]
))
