async function fetchItems(id) {
  if (id) {
    return await Item.findById(id);
  } else {
    return await Item.find();
  }
}
async function deleteItem(id) {
    const item = await Item.findById(id)
    if (req.locals.username !== item.owner) {
        throw new Error("You are not the owner!")
    }
    await item.remove()
}

module.exports = { fetchItems, deleteItem };
