const { create } = require("../services/cubeServices");

const createController = require("express").Router();
createController.get("/", (req, res) => {
  if (!res.isLogged) {
    res.status(302);
    res.redirect("/");
    return;
  }
  res.render("create", { title: "Create Cube Page" });
});
createController.post("/", async (req, res) => {
  await create(req.body, req.cookies.jwt);
  res.status(308);
  res.redirect("/");
});

module.exports = createController;
