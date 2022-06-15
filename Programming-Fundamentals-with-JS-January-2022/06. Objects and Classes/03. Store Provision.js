function storeProvision(localStoreStock, orderedProducts) {
    let products = {};
    for (let index = 0; index < localStoreStock.length; index++) {
        if (index % 2 == 0) {
            products[localStoreStock[index]] = Number(localStoreStock[index + 1]);
        }
    }
    for (let index = 0; index < orderedProducts.length; index++) {
        if (index % 2 == 0) {
            if (Object.keys(products).includes(orderedProducts[index])) {
                products[orderedProducts[index]] += Number(orderedProducts[index + 1])
            }else{
                products[orderedProducts[index]] = Number(orderedProducts[index + 1])
            }
        }
    }
    for (let product of Object.entries(products)){
        console.log(product.join(' -> '));
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)