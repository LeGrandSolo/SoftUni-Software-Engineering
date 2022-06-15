function solve(array) {
  let products = {};
  for (const product of array) {
    let [name, price] = product.split(" : ");
    price = Number(price);
    products[name] = price;
  }
  let sorted = [];
  for (const product in products) {
      sorted.push(product);
  }
  sorted.sort();
  let firstLetters = {};
  sorted.forEach((x) => {
    if (!firstLetters[x[0]]) {
        firstLetters[x[0]] = [];
    }
    firstLetters[x[0]].push(x);
  });
  for (const firstLetter in firstLetters) {
      console.log(firstLetter);
      for (const product of firstLetters[firstLetter]) {
          console.log(`${product}: ${products[product]}`);
      }
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
