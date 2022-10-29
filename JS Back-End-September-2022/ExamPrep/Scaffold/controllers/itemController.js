const { deleteItem, fetchItems } = require("../services/itemServices");
const errorCookie = require("../utils/errorCookie");
const parseError = require("../utils/errorParser");

const itemController = require("express").Router();

itemController.get("/create", (req, res) => {
  if (!req.locals.isLogged) {
    res.redirect("/");
  } else {
    res.render("/create");
  }
});
itemController.post("/create", async (req, res) => {
  try {
    if (!req.locals.username) {
      throw new Error("You are not logged in!");
    }
    //TODO
    res.redirect("/")
  } catch (error) {
    error = parseError(error);
    console.log(error);
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
    const item = await Item.findById(req.params.id).populate("owner");
    const user = await User.find({username:req.locals.username})
    if (String(user._id) !== String(item.owner._id)) {
        throw new Error("You are not the owner!")
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
    await deleteItem(req.params.id,req.locals.username);
    res.redirect("/");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
module.exports = itemController
