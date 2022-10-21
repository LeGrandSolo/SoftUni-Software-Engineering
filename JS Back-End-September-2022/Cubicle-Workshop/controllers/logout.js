const logoutController = require("express").Router();

logoutController.get("/", (req, res) => {
  res.clearCookie("jwt");
  res.status(302);
  res.redirect("/");
});

module.exports = logoutController;
