const Blog = require("../models/Blog");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const blogs = await Blog.find({}).sort({ creationDate: -1 }).limit(3).lean();
  res.render("home", { title: "Mind Blog", blogs });
});

module.exports = homeController;
