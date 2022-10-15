const {
  addAccessory,
  getAccessories,
} = require("../services/accessoryServices");
const { getById } = require("../services/cubeServices");

const addAccessoryController = require("express").Router();

addAccessoryController.get("/", (req, res) => {
  res.render("addAccessory", {
    title: "Attach Accessory",
  });
});
addAccessoryController.post("/", async (req, res) => {
  await addAccessory(req.body);
  res.status(302);
  res.redirect("/");
});


module.exports = addAccessoryController;
