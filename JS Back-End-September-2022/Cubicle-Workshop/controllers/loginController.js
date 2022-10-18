const { login } = require("../services/userServices");

const loginController = require("express").Router();

loginController.get("/", (req, res) => {
  res.render("login");
});
loginController.post("/", async (req, res) => {
  try {
    await login(req.body);
  } catch (error) {
    console.log(error.message);
  }
  res.status(302), res.redirect("/");
});

module.exports = loginController;
