const { body, check, validationResult } = require("express-validator");

const { login, register } = require("../services/authenticationService");
const parseError = require("../utils/errorParser");
const newErrorWithFields = require("../utils/newErrorWithField");

const authenticationController = require("express").Router();

authenticationController.get("/login", (req, res) => {
  if (req.locals.isLogged) {
    res.redirect("/");
  } else {
    res.render("login", { title: "Login" });
  }
});

authenticationController.post(
  "/login",
  async (req, res) => {
    try {
      const token = await login(req.body.email, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      res.render("login", { title: "Login", error,title:"Login" });
    }
  }
);

authenticationController.get("/register", (req, res) => {
  if (req.locals.isLogged) {
    res.redirect("/");
  } else {
    res.render("register", { title: "Register" });
  }
});

authenticationController.post(
  "/register",
  body("username").isLength({ min: 5 }).withMessage("Min lenght 5 (username)!"),
  body("email").isLength({ min: 10 }).withMessage("Min lenght 10 (email)!"),
  body("password").isLength({ min: 4 }).withMessage("Min lenght 4 (password)!"),
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
      res.render("register", { title: "Register", error, title:"Register"});
    }
  }
);
authenticationController.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});
module.exports = authenticationController;
