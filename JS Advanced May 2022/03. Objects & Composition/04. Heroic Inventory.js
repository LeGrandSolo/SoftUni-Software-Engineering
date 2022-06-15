function solve(arrayOfHeroes) {
  let heroes = [];
  for (const hero of arrayOfHeroes) {
    let [name, level, items] = hero.split(" / ");
    level = +level;
    items = items ? items.split(", ") : [];
    heroes.push({ name, level, items});
  }
  return JSON.stringify(heroes);
}
console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
