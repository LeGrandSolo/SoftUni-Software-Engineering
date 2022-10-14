const { retrieveData: retrieveItem, isCollectionEmpty } = require("../services/itemServices");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const search = req.query.search || "";
  const from = req.query.from || 1;
  const to = req.query.to || 6;
  const cubes = await retrieveItem(search, from, to);
  if (!cubes.length) {
    if (!(await isCollectionEmpty())) {
      res.status(302);
      res.redirect("/");
    }
  }else{
    res.render("index", { cubes });
  }
});

module.exports = homeController;
