function dictionary(jsonStrArr) {
    let dictionaryObj = {};
    let newDictObj = {};
    for (let jsonStr of jsonStrArr) {
        jsonStr = JSON.parse(jsonStr);
        dictionaryObj[Object.keys(jsonStr)[0]] = Object.values(jsonStr)[0];
        console.log();
    }
    let dictionaryKeysArr = Object.keys(dictionaryObj);
    dictionaryKeysArr.sort((a,b) => a.localeCompare(b));
    for (let key of dictionaryKeysArr) {
        newDictObj[key] = dictionaryObj[key];
        console.log(`Term: ${[key]} => Definition: ${newDictObj[key]}`);
        
    }

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )