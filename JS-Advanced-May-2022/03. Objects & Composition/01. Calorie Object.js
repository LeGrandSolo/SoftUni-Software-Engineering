function solve(arr) {
  let foodCalories = {};
  for (let index = 0; index < arr.length; index += 2) {
    foodCalories[arr[index]] = Number(arr[index + 1]);
  }
  console.log(foodCalories);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
