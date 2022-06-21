class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }
    const plant = { plantName, spaceRequired, ripe: false, quantity: 0 };
    this.spaceAvailable -= spaceRequired;
    this.plants.push(plant);
    return `The ${plantName} has been successfully planted in the garden.`;
  }
  ripenPlant(plantName, quantity) {
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    for (const plant of this.plants) {
      if (plant.plantName === plantName) {
        if (plant.ripe === true) {
          throw new Error(`The ${plantName} is already ripe.`);
        }
        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity === 1) {
          return `${quantity} ${plantName} has successfully ripened.`;
        } else {
          return `${quantity} ${plantName}s have successfully ripened.`;
        }
      }
    }
    throw new Error(`There is no ${plantName} in the garden.`);
  }
  harvestPlant(plantName) {
    for (let i = 0; i < this.plants.length; i++) {
      const plant = this.plants[i];
      if (plant.plantName === plantName) {
        if (plant.ripe !== true) {
          throw new Error(
            `The ${plantName} cannot be harvested before it is ripe.`
          );
        }
        let harvestedPlant = this.plants.splice(i, 1)[0];
        this.spaceAvailable += plant.spaceRequired;
        this.storage.push(harvestedPlant);
        return `The ${plantName} has been successfully harvested.`;
      }
    }
    throw new Error(`There is no ${plantName} in the garden.`);
  }
  generateReport() {
    let result = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;
    let sorted = [];
    for (const plant of this.plants) {
      sorted.push(plant.plantName);
    }
    sorted = sorted.sort((a, b) => a.localeCompare(b));
    result += sorted.join(", ");
    if (this.storage.length === 0) {
      result += "\nPlants in storage: The storage is empty.";
    } else {
      result += "\nPlants in storage: ";
      let arrOfStrings = [];
      for (const plant of [...this.storage]) {
        let str = `${plant.plantName} (${plant.quantity})`;
        arrOfStrings.push(str);
      }
      result += arrOfStrings.join(", ");
      return result;
    }
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
