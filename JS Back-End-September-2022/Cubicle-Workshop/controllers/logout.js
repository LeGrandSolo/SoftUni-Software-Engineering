const logoutController = require("express").Router();

logoutController.get("/", (req, res) => {
  res.clearCookie("jwt");
  res.status(308);
  res.redirect("/");
});

module.exports = logoutController;
