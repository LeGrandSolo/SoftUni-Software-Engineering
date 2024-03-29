const { body, check, validationResult } = require("express-validator");

const { login, register } = require("../services/authenticationService");
const parseError = require("../utils/errorParser");
const newErrorWithFields = require("../utils/newErrorWithField");

const authenticationController = require("express").Router();

authenticationController.get("/login", (req, res) => {
  if (req.isLogged) {
    res.redirect("/");
  } else {
    res.render("login", { title: "Login" });
  }
});

authenticationController.post(
  "/login",
  async (req, res) => {
    try {
      const token = await login(req.body.username, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      const body = { username: req.body.username };
      res.render("login", { title: "Login", error, body });
    }
  }
);

authenticationController.get("/register", (req, res) => {
  if (req.isLogged) {
    res.redirect("/");
  } else {
    res.render("register", { title: "Register" });
  }
});

authenticationController.post(
  "/register",
  body("email")
    .isEmail()
    .withMessage("Email must be valid!"),
  body("username").notEmpty().withMessage("All fields required!"),
  body("password").isLength({min:5}).withMessage("Password must be at least 5 characters long!").isAlphanumeric("en-US").withMessage("Password must consist only of letters and numbers"),
  async (req, res) => {
    try {
      const error = validationResult(req).errors;
      if (error.length > 0) {
        throw error;
      }
      //TODO validate accordingly
      if (req.body.password !== req.body.rePassword) {
        throw newErrorWithFields("Passwords must match!", "password", "repass");
      }
      const token = await register(req.body.email, req.body.username, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      const body = { email:req.body.email,username: req.body.username };
      res.render("register", { title: "Register", error, body });
    }
  }
);
authenticationController.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});
module.exports = authenticationController;
