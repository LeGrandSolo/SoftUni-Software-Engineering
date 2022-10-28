const { deleteItem, fetchItems } = require("../services/itemServices");
const errorCookie = require("../utils/errorCookie");

const itemController = require("express").Router();

itemController.get("/create", (req, res) => {
  if (!req.username) {
    res.redirect("/");
  } else {
    res.render("/create");
  }
});
itemController.post("/create", async (req, res) => {
  try {
    if (!req.username) {
      throw new Error("You are not logged in!");
    }
  } catch (error) {
    error = parseError(error);
    console.log(error);
    errorCookie(error, res);
    res.redirect("/");
  }
});

itemController.get("/:id/details", async (req, res) => {
  try {
    const item = await fetchItems(req.params.id);
    res.render("details", { item });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});

itemController.get("/:id/edit", async (req, res) => {
  try {
    const item = await fetchItems(req.params.id);
    if (req.username !== item.owner) {
      throw new Error("You are not the owner!");
    }
    res.render("edit", { item });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
itemController.get("/:id/delete", async (req, res) => {
  try {
    await deleteItem(req.params.id);
    res.redirect("/");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
