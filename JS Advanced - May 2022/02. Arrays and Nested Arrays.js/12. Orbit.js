function orbit(input) {
    const [dimentionX, dimentionY, starX, starY] = input;
    let newMatrix = new Array(dimentionY).fill(1).map(_ => new Array(dimentionX).fill(1));
    let orbitPower = 1;
    let orbitX = 1;
    let orbitY = 1;
    while (orbitPower < dimentionX - starX) {
        orbitPower++;
        if (newMatrix[starY + orbitY][starX]) {
            newMatrix[starY + orbitY][starX] = orbitPower;
        }
        if (newMatrix[starY - orbitY][starX]) {
            newMatrix[starY - orbitY][starX] = orbitPower;
        }
        if (newMatrix[starY][starX + orbitX]) {
            newMatrix[starY][starX + orbitX] = orbitPower;
        }
        if (newMatrix[starY][starX - orbitX]) {
            newMatrix[starY][starX - orbitX] = orbitPower;
        }
        if (newMatrix[starY + orbitY][starX + orbitX]) {
            newMatrix[starY + orbitY][starX + orbitX] = orbitPower;
        }
        if (newMatrix[starY + orbitY][starX - orbitX]) {
            newMatrix[starY + orbitY][starX - orbitX] = orbitPower;
        }
        if (newMatrix[starY - orbitY][starX + orbitX]) {
            newMatrix[starY - orbitY][starX + orbitX] = orbitPower;
        }
        if (newMatrix[starY - orbitY][starX - orbitX]) {
            newMatrix[starY - orbitY][starX - orbitX] = orbitPower;
        }
        orbitX++;
        orbitY++;
    }
    for (let i = 0; i < dimentionY; i++) {
        const col = newMatrix[i];
        let lastIndex = dimentionX - 1;
        for (let j = 0; j < dimentionX - 1; j++) {
            if (!(col[j] == col[lastIndex])) {
                col[j + 1] = col[j];
            }
        }
    }
    for (let i = 0; i < dimentionY; i++) {
        let colmn = []
        for (let j = 0; j < dimentionX; j++) {
            colmn.push(newMatrix[j][i])
        }
        colmn = []
    }
    console.log(newMatrix.join('\n').split(',').join(' '));
}
orbit([5, 5, 2, 2])