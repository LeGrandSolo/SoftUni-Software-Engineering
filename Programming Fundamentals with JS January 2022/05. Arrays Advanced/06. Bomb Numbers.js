function bombNumbers(sequence, specialNumAndPower) {
    let specialNum = specialNumAndPower.shift();
    let power = specialNumAndPower.shift();
    let specialNumIndexes = sequence.indexOf(specialNum);
    while (specialNumIndexes != -1) {
        let startExplosion = Math.max(0, specialNumIndexes - power);
        let explosionRadius = power * 2 + 1;
        sequence.splice(startExplosion, explosionRadius);
        specialNumIndexes = sequence.indexOf(specialNum);
    }
    let sum = 0;
    sequence.map(x => sum += x);
    console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)