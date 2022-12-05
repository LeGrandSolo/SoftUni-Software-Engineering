const { body, check, validationResult } = require("express-validator");

const { login, register } = require("../services/authenticationService");
const parseError = require("../utils/errorParser");
const newErrorWithFields = require("../utils/newErrorWithField");

const authenticationController = require("express").Router();

authenticationController.get("/login", (req, res) => {
  if (req.locals.isLogged) {
    res.redirect("/")
  }else{
    res.render("login", { title: "Login" });
  }
});

authenticationController.post(
  "/login",
  async (req, res) => {
    try {
      const error = validationResult(req).errors;
      if (error.length > 0) {
        throw error;
      }
      const token = await login(req.body.email, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      res.render("login", { title: "Login Page", error,body });
    }
  }
);

authenticationController.get("/register", (req, res) => {
  if (req.locals.isLogged) {
    res.redirect("/")
  }else{
    res.render("register", { title: "Register Page" });
  }
});

authenticationController.post(
  "/register",
  body("username").isLength({min:2}).withMessage("Username must be at least 2 characters long!"),
  body("email").isLength({min:10}).withMessage("Email must be at least 10 characters long!"),
  body("password").isLength({min:4}).withMessage("Password must be at least 4 characters long!"),
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
      const token = await register(req.body.username,req.body.email, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      res.render("register", { title: "Register", error});
    }
  }
);
authenticationController.get("/logout",(req,res)=>{
  res.clearCookie("token")
  res.redirect("/")
})
module.exports = authenticationController;
