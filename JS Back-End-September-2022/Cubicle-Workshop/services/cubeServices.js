const Cube = require("../models/Cube");

async function retrieveItem(search = "", from = 1, to = 6) {
  const data = await Cube.find({})
    .where("name")
    .regex(new RegExp(search, "i"))
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

async function getById(id) {
  return await Cube.findById(id).lean();
}

async function create(formData) {
  const cube = new Cube({
    name: formData.name,
    description: formData.description,
    imageUrl: formData.imageUrl,
    difficultyLevel: formData.difficultyLevel,
  });
  try {
    await cube.save();
  } catch (err) {
    console.log(err._message);
  }
}
module.exports = { create, retrieveData: retrieveItem, isCollectionEmpty, getById };
