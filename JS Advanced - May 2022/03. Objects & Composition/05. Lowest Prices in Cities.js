function solve(array) {
  //{townName} | {productName} | {productPrice}
  let lowestPricedProducts = {};
  for (const token of array) {
    let [town, product, price] = token.split(" | ");
    price = +price;
    if (!lowestPricedProducts[product]) {
      lowestPricedProducts[product] = { town, price };
    }
    if (price < lowestPricedProducts[product].price) {
      lowestPricedProducts[product].price = price;
    }
  }
  //{productName} -> {productLowestPrice} ({townName})
  for (const product in lowestPricedProducts) {
    console.log(`${product} -> ${lowestPricedProducts[product].price} (${lowestPricedProducts[product].town})`);
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
