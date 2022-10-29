const User = require("../models/User");

async function fetchItems(id) {
  if (id) {
    return await Item.findById(id).lean();
  } else {
    return await Item.find().lean();
  }
}
async function deleteItem(id,username) {
    const item = await Item.findById(id).populate("owner")
    const user = await User.find({username:username})
    if (String(user._id) !== String(item.owner._id)) {
        throw new Error("You are not the owner!")
    }
    await item.delete()
}

module.exports = { fetchItems, deleteItem };
