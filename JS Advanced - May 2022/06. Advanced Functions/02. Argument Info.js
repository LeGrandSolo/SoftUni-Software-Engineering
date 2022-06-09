function solve(...arguments) {
    let arrayOfElemObj = [];
    pushElemsAsObjAndPrintElem(arguments);
    countElemsInType(arrayOfElemObj);
    function pushElemsAsObjAndPrintElem(arrayOfArg) {
        for (const argument of arrayOfArg) {
            arrayOfElemObj.push({ [typeof argument]: argument })
            console.log(`${typeof argument}: ${argument}`);
        }
    }
    function countElemsInType(arrayOfObj) {
        let totalNumOfEachType = {};
        for (const typeAndName of arrayOfObj) {
            let type = Object.keys(typeAndName)[0];
            if (!totalNumOfEachType[type]) {
                totalNumOfEachType[type] = 0;
            }
            totalNumOfEachType[type] += 1;
        }
        let sorted = Object.entries(totalNumOfEachType);
        sorted.sort((a, b) => b[1] - a[1]);
        for (const [type, num] of sorted) {
            console.log(`${type} = ${num}`);
        }
    }
}
console.log(solve('cat','asd', 42, function () { console.log('Hello world!'); }));