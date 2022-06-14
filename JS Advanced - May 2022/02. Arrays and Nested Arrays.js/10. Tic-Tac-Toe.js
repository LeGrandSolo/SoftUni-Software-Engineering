function ticTacToe(input) {
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];
    let isFirstPlayersTurn = true;
    let winner;
    for (const token of input) {
        let [i, j] = token
            .split(' ')
            .map(Number);
        if (isFirstPlayersTurn) {
            if (!isOver(matrix)[0]) {
                if (matrix[i][j] === false) {
                    isFirstPlayersTurn = false;
                    matrix[i][j] = 'X';
                } else {
                    console.log('This place is already taken. Please choose another!');
                }
            } else {
                winner = isOver(matrix)[1];
                break;
            }
        } else {
            if (!isOver(matrix)[0]) {
                if (matrix[i][j] === false) {
                    isFirstPlayersTurn = true;
                    matrix[i][j] = 'O';
                } else {
                    console.log('This place is already taken. Please choose another!');
                }
            } else {
                winner = isOver(matrix)[1];
                break;
            }
        }
    }
    winner = isOver(matrix)[1];
    if (winner !== undefined) {
        console.log(`Player ${winner} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
    console.log(matrix
        .join('\n')
        .split(',')
        .join('\t'));
    function isOver(matrix) {
        let gameContinues = true;
        let winner;
        for (let i = 0; i < matrix.length; i++) {
            if (!gameContinues) {
                break;
            }
            if (matrix[i].every(x => x == 'X' || matrix[i].every(x => x == 'O'))) {
                gameContinues = false;
                winner = matrix[i][0];
            }
            if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i] && matrix[0][i] != false) {
                gameContinues = false;
                winner = matrix[0][i];
            }
        }
        if (!gameContinues) {
            return [true, winner];
        }
        if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2] && matrix[0][0] != false) {
            gameContinues = false;
            winner = matrix[0][0];
        }
        if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0] && matrix[0][2] != false) {
            gameContinues = false;
            winner = matrix[0][2];
        }
        if (matrix[0].every(x => x != false) && matrix[1].every(x => x != false) && matrix[2].every(x => x != false)) {
            gameContinues = false;
        }
        if (!gameContinues) {
            return [true, winner];
        } else {
            return [false];
        }
    }
}
ticTacToe(['0 0',
    '0 0',
    '1 1',
    '0 1',
    '0 2',
    '0 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 2', '1 0', '2 1', '2 0']
);