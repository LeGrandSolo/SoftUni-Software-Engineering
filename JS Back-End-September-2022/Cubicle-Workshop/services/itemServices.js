const Cube = require("../models/Item");

const fs = require("fs").promises;

async function retrieveData(search = "", from = 1, to = 6) {
  const data = await Cube.find({})
    .where("name")
    .regex(search)
    .where("difficultyLevel")
    .gte(from)
    .lte(to)
    .lean();
  return data;
}

async function isCollectionEmpty() {
  if (!(await Cube.findOne({}).where("name").regex(""))) {
    return true;
  }
  return false;
}

async function create(formData) {
  const cube = new Cube({
    name: formData.name,
    description: formData.description,
    imageUrl: formData.imageUrl,
    difficultyLevel: formData.difficultyLevel,
  });
  cube.save();
}
module.exports = { create, retrieveData, isCollectionEmpty };
