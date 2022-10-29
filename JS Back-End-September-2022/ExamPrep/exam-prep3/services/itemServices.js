const Crypto = require("../models/Crypto");
const User = require("../models/User");

async function fetchCryptos(id) {
  if (id) {
    return await Crypto.findById(id).lean();
  } else {
    return await Crypto.find().lean();
  }
}
async function deleteCrypto(id,req) {
  const item = await Crypto.findById(id).populate("owner");
  const user = await User.findOne({username : req.locals.username})
  if (String(user._id) != String(item.owner._id)) {
    throw new Error("You are not the owner!");
  }
  await item.delete();
}
async function createCrypto(
  name,
  imageUrl,
  price,
  description,
  paymentMethod,
  username
) {
  const user = await User.findOne({ username: username });
  const crypto = await new Crypto({
    name,
    imageUrl,
    price,
    description,
    paymentMethod,
    owner: user._id,
  });
  await crypto.save();
}
async function editCrypto(
  req,
  name,
  imageUrl,
  price,
  description,
  paymentMethod
) {
  const crypto = await Crypto.findById(req.params.id);
  crypto.name = name;
  crypto.imageUrl = imageUrl;
  crypto.price = price;
  crypto.description = description;
  crypto.paymentMethod = paymentMethod;
  await crypto.save();
}
module.exports = { fetchCryptos, deleteCrypto, createCrypto, editCrypto };
