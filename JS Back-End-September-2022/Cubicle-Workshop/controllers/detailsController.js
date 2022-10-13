const { getById } = require("../services/itemServices");
const defaultController = require("./defaultController");

const detailsController = require("express").Router();

detailsController.get("/details/:id", async (req, res) => {
  return defaultController(req, res);
  /* res.render("details", {
    item: itemById,
  }); */
});

module.exports = detailsController;
