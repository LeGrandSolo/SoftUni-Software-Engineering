const { login } = require("../services/authServices");
const { jwtSign } = require("../utils/jwtUtil");

const loginController = require("express").Router();

loginController.get("/", (req, res) => {
  res.render("login");
});
loginController.post("/", async (req, res) => {
  try {
    const user = await login(req.body);
    res.cookie("jwt", jwtSign(user));
    res.status(302);
    res.redirect("/");
  } catch (error) {
    res.render("login", {
      error: error.message,
    });
    console.log(error.message);
  }
});

module.exports = loginController;
