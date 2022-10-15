const { getById } = require("../services/cubeServices");
const defaultController = require("../controllers/defaultController");
const Cube = require("../models/Cube");
const detailsController = require("express").Router();

detailsController.get("/details/:id", async (req, res) => {
  const item = await Cube.findById(req.params.id)
    .populate("accessories")
    .lean();
  if (item) {
    res.render("details", {
      item,
    });
  } else {
    return defaultController(req, res);
  }
});

module.exports = detailsController;
