const { getById, getCubeDetails } = require("../services/cubeServices");
const defaultController = require("../controllers/defaultController");
const Cube = require("../models/Cube");
const retrieveUserByName = require("../utils/userUtil");
const { jwtDecode } = require("../utils/jwtUtil");
const detailsController = require("express").Router();

detailsController.get("/:id", async (req, res) => {
  const cube = await getCubeDetails(req);
  if (cube) {
    res.render("details", {
      item: cube,
    });
  } else {
    return defaultController(req, res);
  }
});

detailsController.get("/:id/delete", async (req, res) => {
  await Cube.findByIdAndDelete(req.params.id);
  res.status(200);
  res.redirect("/");
});

detailsController.get("/:id/edit", async (req, res) => {
  if (!res.isLogged) {
    res.status(308);
    res.redirect("/");
    return;
  }
  const cube = await Cube.findById(req.params.id).lean();
  res.render("edit", {
    title: "Edit Cube",
    cube,
  });
});
detailsController.post("/:id/edit", async (req, res) => {
  if (!res.isLogged) {
    res.status(308);
    res.redirect("/");
    return;
  }
  await Cube.findByIdAndUpdate(req.params.id, req.body);
  res.status(308);
  res.redirect("/");
});

module.exports = detailsController;
