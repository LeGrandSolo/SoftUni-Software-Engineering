function diagonalAttack(arrayOfStrings) {
    let matrix = [];
    for (let token of arrayOfStrings) {
        token = token.split(' ');
        matrix.push(token);
    }
    let firstDiagSum = 0;
    let secDiagSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagSum += Number(matrix[i][i]);
    }
    let col = 0;
    for (let i = matrix.length - 1; i >= 0; i--) {
        secDiagSum += Number(matrix[col][i]);
        col++;
    }
    if (firstDiagSum == secDiagSum) {
        let newMatrix = new Array(matrix.length).fill().map(_ => Array(matrix.length).fill(firstDiagSum));
        for (let i = 0; i < matrix.length; i++) {
            newMatrix[i][i] = matrix[i][i];
        }
        col = 0;
        for (let i = matrix.length - 1; i >= 0; i--) {
            newMatrix[col][i] = matrix[col][i];
            col++;
        }
        console.log(newMatrix
            .join('\n')
            .split(',')
            .join(' '));
    } else {
        console.log(matrix
            .join('\n')
            .split(',')
            .join(' '));
    }
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
console.log('--------');
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']);