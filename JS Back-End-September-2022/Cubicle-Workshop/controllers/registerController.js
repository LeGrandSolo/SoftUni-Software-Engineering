const { register } = require("../services/authServices");
const { jwtSign } = require("../utils/jwtUtil");

const registerController = require("express").Router();

registerController.get("/", (req, res) => {
  res.render("register");
});
registerController.post("/", async (req, res) => {
  try {
    const user = await register(req.body);
    res.cookie("jwt", jwtSign(user));
    res.status(302);
    res.redirect("/");
  } catch (error) {
    res.render("register", {
      error: error.message,
    });
    console.log(error.message);
  }
});

module.exports = registerController;
