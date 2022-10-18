const { register } = require("../services/userServices");

const registerController = require("express").Router();

registerController.get("/", (req, res) => {
  res.render("register");
});
registerController.post("/", async (req, res) => {
  try {
    await register(req.body);
  } catch (error) {
    console.log(error);
  }
  res.status(302);
  res.redirect("/");
});

module.exports = registerController;
