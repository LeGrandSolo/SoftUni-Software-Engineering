function timeTravel(array) {
    let countries = {};
    for (let travel of array) {
        travel = travel.split(' > ');
        let coutry = travel.shift();
        let town = travel.shift();
        let cost = travel.shift();
        if(!countries.hasOwnProperty(coutry)){
            countries[coutry] = new Map ();
        };
        if (countries[coutry].get(town) > Number(cost) || !countries[coutry].has(town)) {
            countries[coutry].set(town, Number(cost));
        };
    }
    let sortedAlphabet = Object.keys(countries);
    sortedAlphabet.sort((a, b) => a.localeCompare(b));
    for (let country of sortedAlphabet) {
        let town = '';
        let sortedValue = Array.from(countries[country].entries());
        sortedValue.sort((a, b) => a[1] - b[1])
            for (let townInfo of sortedValue) {
                if (town.length > 0) {
                    town += ' '; 
                }
                town += townInfo[0] + ' -> ' + townInfo[1]
            }
            console.log(country + ' -> ' + town);
    }
}
timeTravel([
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sofia > 500",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )