const { getById } = require("../services/itemServices");
const defaultController = require("../controllers/defaultController");
const detailsController = require("express").Router();

detailsController.get("/details/:id", async (req, res) => {
  const item = await getById(req.params.id);
  if (item) {
    res.render("details", {
      item,
    });
  }else{
    return defaultController(req, res);
  }
});

module.exports = detailsController;
