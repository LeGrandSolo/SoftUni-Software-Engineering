const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");
const { getById } = require("./cubeServices");

async function addAccessory(formData) {
  const accessory = new Accessory({
    name: formData.name,
    description: formData.description,
    imageUrl: formData.imageUrl,
  });
  try {
    await accessory.save();
  } catch (err) {
    console.log(err);
  }
}

async function getAccessories(itemId, itemHasAccessory) {
  if (itemHasAccessory) {
    return await Accessory.find({}).lean();
  } else {
    return await Accessory.find({}).where("cubes").nin(itemId).lean();
  }
}

async function attachAccessory(cubeId, formData) {
  const cubeAccessories = await Cube.findById(cubeId).select("accessories");
  const accessoryId = formData.accessory;
  const accessoryCubes = await Accessory.findById(accessoryId).select("cubes");
  console.log(accessoryCubes, accessoryId);
  cubeAccessories.accessories.push(accessoryId);
  accessoryCubes.cubes.push(cubeAccessories._id);
  cubeAccessories.save();
  accessoryCubes.save();
}

module.exports = { addAccessory, getAccessories, attachAccessory };
