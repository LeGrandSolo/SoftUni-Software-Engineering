const { body, check, validationResult } = require("express-validator");

const { login, register } = require("../services/authenticationService");
const parseError = require("../utils/errorParser");

const authenticationController = require("express").Router();

authenticationController.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

authenticationController.post("/login", async (req, res) => {
  try {
    //TODO validate accordingly
    const token = await login(res.body.username, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("login", { title: "Login" });
  }
});

authenticationController.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

authenticationController.post(
  "/register",
  body("username").notEmpty().withMessage("All fields required!"),
  body("password").notEmpty().withMessage("All fields required!"),
  body("repass").notEmpty().withMessage("All fields required!"),
  async (req, res) => {
    try {
      const error = validationResult(req).errors
      if (error.length > 0) {
        throw error;
      }
      //TODO validate accordingly
      if (req.body.password !== req.body.repass) {
        throw new Error("Passwords don't match");
      }
      const token = await register(req.body.username, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (err) {
      err = parseError(err)
      console.log(err);
      res.render("register", { title: "Register" });
    }
  }
);
module.exports = authenticationController;
