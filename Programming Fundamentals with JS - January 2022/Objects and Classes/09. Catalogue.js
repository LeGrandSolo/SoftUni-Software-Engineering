function catalogue(input) {
    let products = {};
    for (let product of input) {
        product = product.split(' : ');
        products[product[0]] = product[1];
    }
    let sorted = Object.keys(products);
    let firstLetter = '';
    sorted = sorted.sort((a, b) => a.localeCompare(b));
    for (let elemet of sorted) {
        if (firstLetter != elemet[0]) {
            console.log(elemet[0]);
            firstLetter = elemet[0];
        }
        console.log(`  ${elemet}: ${products[elemet]}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)