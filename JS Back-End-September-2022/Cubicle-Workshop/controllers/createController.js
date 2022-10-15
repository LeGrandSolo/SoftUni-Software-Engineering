const { create } = require("../services/cubeServices");

const createController = require("express").Router();
createController.get("/", (req, res) => {
  res.render("create", { title: "Create Cube Page" });
});
createController.post("/", async (req, res) => {
  create(req.body);
  res.status(302);
  res.redirect("/");
});

module.exports = createController;
