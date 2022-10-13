const { retrieveData } = require("../services/itemServices");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const search = req.query.search || "";
  const from = req.query.from || 1;
  const to = req.query.to || 6;
  const cubes = await retrieveData(search, from, to);
  if (!cubes) {
    res.status(302);
    res.redirect("/");
    return null;
  }
  res.render("index", { cubes });
});

module.exports = homeController;
