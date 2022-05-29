function solve([info, ...arr]) {
  let towns = [];
  for (const town of arr) {
    let [_, name, lat, long] = town.split("|").map((x) => x.trim());
    lat = Number(lat);
    long = Number(long);
    towns.push({
      Town: name,
      Latitude: Number(lat.toFixed(2)),
      Longitude: Number(long.toFixed(2)),
    });
  }
  return JSON.stringify(towns);
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
