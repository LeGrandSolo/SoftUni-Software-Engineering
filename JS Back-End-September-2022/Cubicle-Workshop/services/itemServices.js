const database = require("../config/database.json");
const fs = require("fs").promises;
class Item {
  constructor({ name, description, imageUrl, difficultyLevel, _id }) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficultyLevel = difficultyLevel;
  }
}

async function retrieveData(search = "", from = 1, to = 6) {
  const data = JSON.parse(await fs.readFile("./config/database.json"));
  const filtered = data
    .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
    .filter((r) => r.difficultyLevel >= from)
    .filter((r) => r.difficultyLevel <= to);
  return filtered;
}

async function getById(id) {
  return (await retrieveData()).find((r) => r._id === id);
}

function generateID() {
  return ("00000" + Math.random() * 999999 || 0).slice(-5);
}

async function create(formData) {
  const data = await retrieveData();
  console.log(data);
  formData._id = generateID();
  data.push(new Item(formData));
  await fs.writeFile("./config/database.json", JSON.stringify(data));
}
module.exports = { create, retrieveData, getById };
