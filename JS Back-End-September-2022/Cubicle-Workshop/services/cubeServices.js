const Cube = require("../models/Cube");
const { jwtVerify, jwtDecode } = require("../utils/jwtUtil");
const retrieveUserByName = require("../utils/userUtil");

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

async function create(formData, token) {
  const cube = new Cube({
    name: formData.name,
    description: formData.description,
    imageUrl: formData.imageUrl,
    difficultyLevel: formData.difficultyLevel,
    creator: await retrieveUserByName(jwtDecode(token).username),
  });
  try {
    await cube.save();
  } catch (err) {
    console.log(err._message);
  }
}
async function getCubeDetails(req) {
  console.log(req.params);
  const cube = await Cube.findById(req.params.id)
    .populate("accessories")
    .populate("creator")
    .lean();
  console.log(cube);
  if (cube.creator.username === jwtDecode(req.cookies.jwt).username) {
    cube.isOwner = true;
  }
  return cube;
}
module.exports = {
  create,
  retrieveData: retrieveItem,
  isCollectionEmpty,
  getCubeDetails,
  getById,
};
