class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    let arrOfAddedProducts = [];
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");
      quantity = Number(quantity);
      price = Number(price);
      let indexOfType = this.availableProducts.findIndex(
        (elem) => elem.type === type
      );
      if (indexOfType === -1) {
        this.availableProducts.push({ type, quantity, price });
        if (!arrOfAddedProducts.includes(type)) {
          arrOfAddedProducts.push(type);
        }
      } else {
        if (this.availableProducts[indexOfType].type === type) {
          if (!arrOfAddedProducts.includes(type)) {
            arrOfAddedProducts.push(type);
          }
          this.availableProducts[indexOfType].quantity += quantity;
          if (this.availableProducts[indexOfType].price < price) {
            this.availableProducts[indexOfType].price = price;
          }
        }
      }
    }
    return `Successfully added ${arrOfAddedProducts.join(", ")}`;
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const selectedProduct of selectedProducts) {
      let [type, quantity] = selectedProduct.split(" ");
      quantity = Number(quantity);
      let indexOfType = this.availableProducts.findIndex(
        (elem) => elem.type === type
      );
      if (indexOfType === -1) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (this.availableProducts[indexOfType].quantity < quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      let price = quantity * this.availableProducts[indexOfType].price;
      this.availableProducts[indexOfType].quantity -= quantity;
      totalPrice += price;
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    let indexOfType = this.availableProducts.findIndex(
      (elem) => elem.type === type
    );
    if (indexOfType === -1) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (this.availableProducts[indexOfType].quantity < quantity) {
      this.availableProducts[indexOfType].quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    this.availableProducts[indexOfType].quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }
  revision() {
    let result = "Available vegetables:\n";
    let productArr = [];
    this.availableProducts.sort((a, b) => a.price - b.price);
    for (const product of this.availableProducts) {
      productArr.push(`${product.type}-${product.quantity}-$${product.price}`);
    }
    result += productArr.join("\n");
    result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return result;
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
