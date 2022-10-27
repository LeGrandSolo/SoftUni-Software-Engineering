const { body, check, validationResult } = require("express-validator");

const { login, register } = require("../services/authenticationService");
const parseError = require("../utils/errorParser");
const newErrorWithFields = require("../utils/newErrorWithField");

const authenticationController = require("express").Router();

authenticationController.get("/login", (req, res) => {
  if (req.isLogged) {
    res.redirect("/")
  }else{
    res.render("login", { title: "Login" });
  }
});

authenticationController.post(
  "/login",
  body("username").notEmpty().withMessage("All fields required!"),
  body("password").notEmpty().withMessage("All fields required!"),
  async (req, res) => {
    try {
      const error = validationResult(req).errors;
      if (error.length > 0) {
        throw error;
      }
      const token = await login(req.body.username, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      const body = {username: req.body.username}
      res.render("login", { title: "Login", error,body });
    }
  }
);

authenticationController.get("/register", (req, res) => {
  if (req.isLogged) {
    res.redirect("/")
  }else{
    res.render("register", { title: "Register" });
  }
});

authenticationController.post(
  "/register",
  body("username").notEmpty().withMessage("All fields required!"),
  body("password").notEmpty().withMessage("All fields required!"),
  body("repass").notEmpty().withMessage("All fields required!"),
  async (req, res) => {
    try {
      const error = validationResult(req).errors;
      if (error.length > 0) {
        throw error;
      }
      //TODO validate accordingly
      if (req.body.password !== req.body.repass) {
        throw newErrorWithFields("Passwords must match!", "password", "repass");
      }
      const token = await register(req.body.username, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      const body = {username: req.body.username}
      res.render("register", { title: "Register", error, body});
    }
  }
);
authenticationController.get("/logout",(req,res)=>{
  res.clearCookie("token")
  res.redirect("/")
})
module.exports = authenticationController;
