function solve(input) {
  let brands = {};
  for (const token of input) {
    let [brand, model, quantity] = token.split(" | ");
    quantity = Number(quantity);
    if (!brands[brand]) {
      brands[brand] = new Map();
    }
    if (!brands[brand].has(model)) {
      brands[brand].set(model, quantity);
    } else {
      quantity += brands[brand].get(model);
      brands[brand].set(model, quantity);
    }
  }
  for (const brand in brands) {
    console.log(brand);
    for (const [model, quantity] of brands[brand]) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}
solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
