const {
  attachAccessory,
  getAccessories,
} = require("../services/accessoryServices");
const { getById } = require("../services/cubeServices");

const attachAccessoryController = require("express").Router();

attachAccessoryController.get("/:id", async (req, res) => {
  if (!res.isLogged) {
    res.status(302);
    res.redirect("/");
    return;
  }
  const id = req.params.id;
  res.render("attachAccessory", {
    id,
    title: "Attach Accessory",
    cube: await getById(id),
    accessories: await getAccessories(id, false),
  });
});

attachAccessoryController.post("/:id", (req, res) => {
  attachAccessory(req.params.id, req.body);
  res.status(302);
  res.redirect("/");
});

module.exports = attachAccessoryController;
