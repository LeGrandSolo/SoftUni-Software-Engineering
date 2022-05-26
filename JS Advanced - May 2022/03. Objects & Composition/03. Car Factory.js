function solve(obj) {
  let engines = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };
  let wheelSize = obj.wheelsize - ((-obj.wheelsize % 2) + 1);
  let car = {
    model: obj.model,
    carriage: { type: obj.carriage, color: obj.color },
    wheels: [],
  };
  for (let index = 1; index <= 4; index++) {
    car.wheels.push(wheelSize);
  }
  for (const engine in engines) {
    if (engines[engine].power >= obj.power) {
      car.engine = {
        power: engines[engine].power,
        volume: engines[engine].volume,
      };
      break;
    }
  }
  return car;
}
console.log(
  solve({
    model: "Brichka",
    power: 65,
    color: "white",
    carriage: "hatchback",
    wheelsize: 16,
  })
);
