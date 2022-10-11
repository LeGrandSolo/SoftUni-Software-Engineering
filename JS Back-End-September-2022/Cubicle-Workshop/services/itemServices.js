const database = require("../config/database.json");
const fs = require("fs");
class Item {
  constructor({ name, description, imageUrl, difficultyLevel }) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficultyLevel = difficultyLevel;
  }
}
function create(formData) {
  const data = JSON.parse(fs.readFileSync("./config/database.json"));
  data.push(new Item(formData));
  fs.writeFileSync("./config/database.json", JSON.stringify(data));
}
module.exports = { create };
