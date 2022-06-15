function radioCrystals(array) {
    let cut = (crystal) => crystal *= 0.25;
    let lap = (crystal) => crystal *= 0.8;
    let grind = (crystal) => crystal -= 20;
    let etch = (crystal) => crystal -= 2;
    let xRay = (crystal) => crystal += 1;
    let transportAndWash = (crystal) => crystal = Math.floor(crystal);
    function processCrystal(currentThickness, desiredThickness) {
        let timesCutted = 0;
        let timesLapped = 0;
        let timesGrinded = 0;
        let timesEtched = 0;
        let hasXRayed = false;
        // let resultArray = [timesCutted, timesLapped, timesGrinded, timesEtched, hasXRayed, currentThickness];
        let resultArray = [];
        while (currentThickness * 0.25 >= desiredThickness) {
            currentThickness = cut(currentThickness);
            timesCutted++;
            if (currentThickness == desiredThickness) {
                resultArray.push(timesCutted);
                resultArray.push(currentThickness);
                return resultArray;
            }
        }
        resultArray.push(timesCutted);
        currentThickness = transportAndWash(currentThickness);
        while (currentThickness * 0.8 >= desiredThickness) {
            currentThickness = lap(currentThickness);
            timesLapped++;
            if (currentThickness == desiredThickness) {
                resultArray.push(timesLapped);
                resultArray.push(currentThickness);
                return resultArray;
            }
        }
        resultArray.push(timesLapped);
        currentThickness = transportAndWash(currentThickness);
        while (currentThickness - 20 >= desiredThickness) {
            currentThickness = grind(currentThickness);
            timesGrinded++;
            if (currentThickness == desiredThickness) {
                resultArray.push(timesGrinded);
                resultArray.push(currentThickness);
                return resultArray;
            }
        }
        resultArray.push(timesGrinded);
        currentThickness = transportAndWash(currentThickness);
        while (currentThickness - 2 >= desiredThickness - 1) {
            currentThickness = etch(currentThickness);
            timesEtched++;
            if (currentThickness == desiredThickness) {
                resultArray.push(timesEtched);
                resultArray.push(currentThickness);
                return resultArray;
            }
        }
        resultArray.push(timesEtched);
        currentThickness = transportAndWash(currentThickness);
        if (currentThickness < desiredThickness) {
            currentThickness = xRay(currentThickness);
            hasXRayed = true;
            resultArray.push(hasXRayed);
        }
        resultArray.push(currentThickness);
        return resultArray;
    }
    let desiredThickness = array[0];
    for (let i = 1; i < array.length; i++) {
        crystal = array[i];
        let currentThickness = crystal;
        let oneCrystalProcess = processCrystal(currentThickness, desiredThickness);
        console.log(`Processing chunk ${crystal} microns`);
        if (1  <= oneCrystalProcess.length && oneCrystalProcess[0] != 0) {
            console.log(`Cut x${oneCrystalProcess[0]}\nTransporting and washing`);
        }
        if (2 <= oneCrystalProcess.length - 1 && oneCrystalProcess[1] != 0) {
            console.log(`Lap x${oneCrystalProcess[1]}\nTransporting and washing`);
        }
        if (3 <= oneCrystalProcess.length - 1 && oneCrystalProcess[2] != 0) {
            console.log(`Grind x${oneCrystalProcess[2]}\nTransporting and washing`);
        }
        if (4 <= oneCrystalProcess.length - 1 && oneCrystalProcess[3] != 0) {
            console.log(`Etch x${oneCrystalProcess[3]}\nTransporting and washing`);
        }
        if (typeof(oneCrystalProcess[oneCrystalProcess.length - 2]) == 'boolean') {
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${oneCrystalProcess[oneCrystalProcess.length - 1]} microns`);
    }
}
radioCrystals([1000, 2000])