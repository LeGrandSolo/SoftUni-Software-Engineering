const { getById, getCubeDetails } = require("../services/cubeServices");
const defaultController = require("../controllers/defaultController");
const Cube = require("../models/Cube");
const retrieveUserByName = require("../utils/userUtil");
const { jwtDecode } = require("../utils/jwtUtil");
const detailsController = require("express").Router();

detailsController.get("/details/:id", async (req, res) => {
  const cube = await getCubeDetails(req);
  if (cube) {
    res.render("details", {
      item: cube,
    });
  } else {
    return defaultController(req, res);
  }
});

module.exports = detailsController;
