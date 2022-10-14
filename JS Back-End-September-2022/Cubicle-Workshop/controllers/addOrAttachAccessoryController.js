const attachAccessoryController = require("express").Router();

attachAccessoryController.get("/", (req, res) => {
  res.render("addAccessory", {
    title: "Attach Accessory",
  });
});
attachAccessoryController.get("/:id", (req, res) => {
  res.render("attachAccessory", {
    title: "Attach Accessory",
  });
});

module.exports = attachAccessoryController;
