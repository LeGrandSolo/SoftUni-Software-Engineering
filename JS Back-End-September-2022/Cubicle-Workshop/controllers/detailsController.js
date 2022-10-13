const { getById } = require("../services/itemServices");
const defaultController = require("./defaultController");

const detailsController = require("express").Router();

detailsController.get("/details/:id", async (req, res) => {
  const itemById = await getById(req.params.id);
  if (!itemById) {
    return defaultController(req, res);
  }
  res.render("details", {
    item: itemById,
  });
});

module.exports = detailsController;
